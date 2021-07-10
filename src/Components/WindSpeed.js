import React from "react";
import { Paper } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

export const WindSpeed = ({ styles, weatherData, options }) => {
  const state = {
    labels: weatherData.hourlyHour,
    datasets: [
      {
        label: "Wind Speed",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weatherData.hourlyWindSpeed,
      },
    ],
  };

  return (
    <Paper elevation={3} className={styles.subPaper}>
      <h1>Wind Speed</h1>
      <h2 className={styles.temperatureValue}>
        {weatherData.wind_speed ? weatherData.wind_speed : "---"} km/h
      </h2>
      <Bar className={styles.chart} data={state} options={options} />
    </Paper>
  );
};
