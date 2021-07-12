import React from "react";
import { Paper } from "@material-ui/core";

export const DailyWeather = ({ styles, weatherData }) => {
  return (
    <Paper className={styles.subPaper}>
      <h1>Daily Weather</h1>
      <div className={styles.dailyWeather}>
        {weatherData.dailyDate?.length > 0 ? (
          weatherData.dailyDate.slice(1, 4).map((date, index) => (
            <div key={index}>
              <p>{date}</p>
              <h3>{weatherData.dailyMaxTemp[index]} °C</h3>
              <h4>{weatherData.dailyMinTemp[index]} °C</h4>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.dailyWeatherIcon[index]}@2x.png`}
                alt=""
              />
              <p>{weatherData.dailyWeatherDesc[index]}</p>
            </div>
          ))
        ) : (
          <div>
            <p>---</p>
            <h3>--- °C</h3>
            <h4>--- °C</h4>
            <img src={"https://openweathermap.org/img/wn/03d@2x.png"} alt="" />
            <p>---</p>
          </div>
        )}
      </div>
    </Paper>
  );
};
