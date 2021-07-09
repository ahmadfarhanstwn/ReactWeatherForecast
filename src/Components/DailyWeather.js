import React from "react";
import { Paper } from "@material-ui/core";

export const DailyWeather = ({ styles, weatherData }) => {
  return (
    <Paper className={styles.subPaper}>
      <h1>Daily Weather</h1>
      <div className={styles.dailyWeather}>
        {weatherData.dailyDate?.length > 0
          ? weatherData.dailyDate.slice(1, 4).map((date, index) => (
              <div key={index}>
                <p>{date}</p>
                <h3>{weatherData.dailyMaxTemp[index]} °C</h3>
                <h4>{weatherData.dailyMinTemp[index]} °C</h4>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.dailyWeatherIcon[index]}@2x.png`}
                  alt=""
                />
                <p>{weatherData.dailyRain[index]}%</p>
                <span className={styles.border}></span>
              </div>
            ))
          : ""}
      </div>
    </Paper>
  );
};
