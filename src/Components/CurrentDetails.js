import React from "react";
import { Paper } from "@material-ui/core";

export const CurrentDetails = ({ styles, weatherData }) => {
  return (
    <Paper elevation={3} className={styles.subPaper}>
      <h1>Current Details</h1>
      <div className={styles.currentDetails}>
        <div>
          <hr />
          <p>
            Humidity = {weatherData.humidity ? weatherData.humidity : "---"} %
          </p>
          <hr />
          <p>
            Dew Point = {weatherData.dew_point ? weatherData.dew_point : "---"}{" "}
            °
          </p>
          <hr />
          <p>
            Pressure = {weatherData.pressure ? weatherData.pressure : "---"} hPa
          </p>
        </div>
        <div>
          <hr />
          <p>
            Visibility ={" "}
            {weatherData.visibility ? weatherData.visibility : "---"} km
          </p>
          <hr />
          <p>
            Sunrise Time = {weatherData.sunrise ? weatherData.sunrise : "---"}
          </p>
          <hr />
          <p>Sunset Time = {weatherData.sunset ? weatherData.sunset : "---"}</p>
        </div>
      </div>
    </Paper>
  );
};
