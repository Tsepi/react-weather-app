import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="container weather-app">
        <div className="container content">
          <div className="container forms">
            <div className="row">
              <div className="col-9 inputform">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a city"
                    id="city-name"
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
                <h1> </h1>

                <p>
                  <span id="day-time">{}</span> <br />
                  <span id="description">{}</span>
                </p>
              </div>
              <div className="col-3 icn">
                <img src={" "} alt={" "} className="icon" />
              </div>

              <div className="col-6 temp">
                <h2>
                  <span className="degree">{}</span>
                  <span className="units">
                    <a href="#0" id="celsius" className="links active">
                      {" "}
                      °C{" "}
                    </a>{" "}
                    |
                    <a href="#0" id="fahrenheit" className="links">
                      {" "}
                      °F
                    </a>
                  </span>
                </h2>

                <p>
                  Humidity: <span id="humidity">{} </span>%
                  <br />
                  Wind: <span id="wind-speed">{} </span> km/h
                  <br />
                  Pressure: <span id="pressure">{}</span> mb
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
