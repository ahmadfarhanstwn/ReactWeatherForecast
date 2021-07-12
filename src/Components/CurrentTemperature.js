import React from "react";
import { Paper } from "@material-ui/core";

export const CurrentTemperature = ({ styles, weatherData }) => {
  return (
    <Paper elevation={3} className={styles.subPaper}>
      <h1>Current Temperature</h1>
      <div className={styles.currentTemperature}>
        <div>
          <h2 className={styles.temperatureValue}>
            {weatherData.temperature
              ? `${weatherData.temperature} °C`
              : "--- °C"}
          </h2>
          <p>
            {weatherData.feels_like
              ? `Feels like ${weatherData.feels_like}°`
              : "Feels like you ( ♥ ͜ʖ ♥)"}
          </p>
        </div>
        <div>
          <img
            src={
              weatherData.weather_icon
                ? `https://openweathermap.org/img/wn/${weatherData.weather_icon}@2x.png`
                : "https://openweathermap.org/img/wn/03d@2x.png"
            }
            alt="Current Weather Icon"
          />
          <p className={styles.temperatureDesc}>
            {weatherData.weather_description
              ? `${weatherData.weather_description}`
              : "No Data"}
          </p>
        </div>
      </div>
    </Paper>
  );
};
