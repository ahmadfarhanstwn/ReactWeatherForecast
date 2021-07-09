import React from "react";
import { Paper } from "@material-ui/core";
import { Line } from "react-chartjs-2";

export const HourlyForecast = ({ styles, weatherData, options }) => {
  const state = {
    labels: weatherData.hourlyHour,
    datasets: [
      {
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weatherData.hourlyTemperature,
      },
    ],
  };

  return (
    <Paper className={styles.subPaper} elevation={3}>
      <h1>Hourly Forecast</h1>
      <Line className={styles.chart} data={state} options={options} />
    </Paper>
  );
};
