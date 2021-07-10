import React from "react";
import { Paper } from "@material-ui/core";
import { Line } from "react-chartjs-2";

export const DailyForecast = ({ styles, weatherData, options }) => {
  const state = {
    labels: weatherData.dailyDate,
    datasets: [
      {
        label: "Average Temperature",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weatherData.dailyTemperature,
      },
      {
        label: "Min Temperature",
        backgroundColor: "pink",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weatherData.dailyMinTemp,
      },
      {
        label: "Max Temperature",
        backgroundColor: "#FFFFE0",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weatherData.dailyMaxTemp,
      },
    ],
  };

  return (
    <Paper className={styles.subPaper} elevation={3}>
      <h1>Daily Temperature</h1>
      <Line className={styles.chart} data={state} options={options} />
    </Paper>
  );
};
