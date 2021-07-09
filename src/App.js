import React from "react";
import { Paper } from "@material-ui/core";
import { useWeatherData } from "./Hook/useWeatherData";
import { useStyles } from "./Hook/useStyles";
import { InputCity } from "./Components/InputCity";
import { CurrentTemperature } from "./Components/CurrentTemperature";
import { CurrentDetails } from "./Components/CurrentDetails";
import { WindSpeed } from "./Components/WindSpeed";
import { HourlyForecast } from "./Components/HourlyForecast";
import { DailyForecast } from "./Components/DailyForecast";
import { DailyWeather } from "./Components/DailyWeather";

export const App = () => {
  const { cityName, weatherData, error, handleChange, handleSubmit } =
    useWeatherData();
  const styles = useStyles();
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scaleShowLabels: false,
    animation: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };

  return (
    <div className={styles.root}>
      <Paper elevation={3} className={styles.paper}>
        <InputCity
          cityName={cityName}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <p>{weatherData.date ? weatherData.date : "Date Now"}</p>
        <CurrentTemperature styles={styles} weatherData={weatherData} />
        <CurrentDetails styles={styles} weatherData={weatherData} />
        <WindSpeed
          styles={styles}
          weatherData={weatherData}
          options={options}
        />
        <HourlyForecast
          styles={styles}
          weatherData={weatherData}
          options={options}
        />
        <DailyForecast
          styles={styles}
          weatherData={weatherData}
          options={options}
        />
        <DailyWeather styles={styles} weatherData={weatherData} />
        <p className={styles.footer}>
          Created by Ahmad Farhan Setiawan (Maddo)
        </p>
      </Paper>
    </div>
  );
};

export default App;
