import React from "react";
import { Paper } from "@material-ui/core";

export const HourlyWeather = ({ styles, weatherData }) => {
  return (
    <Paper className={styles.subPaper}>
      <h1>Hourly Weather</h1>
      <div className={styles.dailyWeather}>
        {weatherData.hourlyHour?.length > 0 ? (
          weatherData.hourlyHour.slice(1, 4).map((hour, index) => (
            <div key={index}>
              <p>{hour}</p>
              <h2>{weatherData.hourlyTemperature[index]} °C</h2>
              <p>Feels like {weatherData.hourlyFeelsLike[index]} °C</p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.hourlyIcon[index]}@2x.png`}
                alt=""
              />
              <p>{weatherData.hourlyWeatherDesc[index]}</p>
            </div>
          ))
        ) : (
          <div>
            <p>---</p>
            <h3>--- °C</h3>
            <h4>--- °C</h4>
            <img src={"http://openweathermap.org/img/wn/03d@2x.png"} alt="" />
            <p>---</p>
          </div>
        )}
      </div>
    </Paper>
  );
};
