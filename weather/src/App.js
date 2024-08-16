// App.js
import { useState } from "react";
import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null); // State to store weather data

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data); // Set weather data in state
      });
  };

  return (
    <div className="App">

      <form onSubmit={submitHandler}>
        <h1>Weather Report</h1>
        <input type="text" value={city} onChange={changeHandler} placeholder="Enter city name" />
        <input type="submit" value="Get Temperature" />
      </form>
      {weatherData && (
        <div className="weather-data">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
