// api.js
export const fetchWeatherData = async (location) => {
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=12e4dc5e5c4f42f4925140156240509&q=${location}&aqi=no`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
