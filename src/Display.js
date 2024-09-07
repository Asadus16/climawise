import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Tabs from './components/tabs';
import { fetchWeatherData } from './api'; // Import the API function

export default function Display() {
  const [location, setLocation] = useState('Lahore');
  const [weatherData, setWeatherData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;

    // Fetch data only when the form is submitted
    fetchWeatherData(location)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar">
        Clima <span className="nav_span">Wise</span>
      </div>
      <div className="page">
        <div className="weather">
          <div className="display">
            <div className="align">
              <div className="temp">{weatherData ? `${weatherData.current.temp_c}°C` : 'Search!'}</div>
              <div className="zone">
                <div className="place">{weatherData ? weatherData.location.name : '...'}</div>
                <div className="date">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="search">
              <Form location={location} setLocation={setLocation} onSubmit={onSubmit} />
              <Tabs weatherData={weatherData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
