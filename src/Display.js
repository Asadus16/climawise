import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Tabs from './components/tabs';
import { fetchWeatherData } from './api';

export default function Display() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({
    current: { temp_c: 'Loading...' },
    location: { name: 'Lahore' },
  });

  useEffect(() => {
    fetchWeatherData('Lahore')
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;

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
              <div className="temp">{`${weatherData.current.temp_c}°C`}</div>
              <div className="zone">
                <div className="place">{weatherData.location.name}</div>
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
