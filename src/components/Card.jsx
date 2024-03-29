import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import "../styles/App.scss";

const Card = ({ loadingData, showInfo, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;
  let url = "";
  let iconUrl = "";
  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";
  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";

  const [initialMessage, setInitialMessage] = useState("¿Qué tiempo hace hoy?");

  useEffect(() => {
    setInitialMessage("¿Qué tiempo hace hoy?");
  }, []);

  useEffect(() => {
    if (!showInfo && !loadingData && !weather.name && !forecast.list.length) {
      setInitialMessage("Introduce un lugar válido");
    }
  }, [showInfo, loadingData, weather, forecast]);

  if (loadingData) {
    return <Spinner />;
  }

  if (showInfo) {
    url = "http://openweathermap.org/img/wn/"; // assets/icon/
    iconUrl = url + weather.weather[0].icon + "@4x.png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      {showInfo === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto">
            <div className="row g-">
              <div className="col-md-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </h1>
                <p className="card-desc">{weather.weather[0].description}</p>
                <img src={iconUrl} className="card-img" alt="icon" />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Humedad: {weather.main.humidity}%
                  </h5>
                  <h5 className="card-text">
                    Velocidad del viento: {weather.wind.speed}m/s
                  </h5>
                </div>
                <hr />

                <div className="row mt-4">
                  <div className="col">
                    <p>{forecastDate3}h</p>
                    <p className="description">
                      <img src={iconUrl3} alt="icon" />
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>{forecastDate6}h</p>
                    <p className="description">
                      <img src={iconUrl6} alt="icon" />
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>{forecastDate9}h</p>
                    <p className="description">
                      <img src={iconUrl9} alt="icon" />
                      {forecast.list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light text-center">{initialMessage}</h2>
      )}
    </div>
  );
};

export default Card;
