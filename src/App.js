import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  function handleSearch(event) {
    let apiKey = `7d88e39fad8e3a2f1b2d1076c46f769c`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    event.preventDefault();
    axios.get(apiURL).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    console.log(response);

    setWeather({
      header: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.main.description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="container">
      <div className="container weather-app">
        <div className="container content">
          <div className="container forms">
            <div className="row">
              <div className="col-9 inputform">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city"
                    id="city-name"
                    onChange={updateCity}
                  />
                </form>
              </div>
              <div className="col-3 buttons">
                <button
                  type="button"
                  className="btn btn-outline-secondary locate"
                  id="location-dot"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary find"
                  id="search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="container info">
            <div className="row">
              <div className="col-3 capital">
                <h1> {weather.header} </h1>

                <p>
                  <span id="day-time">{}</span> <br />
                  <span id="description">{}</span>
                </p>
              </div>
              <div className="col-3 icn">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="icon"
                />
              </div>

              <div className="col-6 temp">
                <h2>
                  <span className="degree">{weather.temperature}</span>{" "}
                  <span className="units">
                    <a href="#0" id="celsius" className="links active">
                      {" "}
                      °C{" "}
                    </a>
                    |
                    <a href="#0" id="fahrenheit" className="links">
                      {" "}
                      °F
                    </a>
                  </span>
                </h2>

                <p>
                  Humidity: <span id="humidity">{weather.humidity} </span>%
                  <br />
                  Wind: <span id="wind-speed">{weather.wind} </span> km/h
                  <br />
                  Pressure: <span id="pressure">{weather.pressure}</span> mb
                </p>
              </div>
            </div>
          </div>

          <div className="container daily">
            <hr />
            <div className="row" id="forecast"></div>
            <hr />
          </div>
        </div>
        <div className="git">
          <small>
            <a
              href="https://github.com/Tsepi/weather-app"
              target="_blank"
              rel="noreferrer"
              className="repository"
            >
              open-source code
            </a>
            , by Tsepi Daemane
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
