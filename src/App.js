import React from "react";

import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App(props) {
  return (
    <div className="container">
      <div className="container weather-app">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
