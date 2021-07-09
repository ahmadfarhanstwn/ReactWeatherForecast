import { useState } from "react";
import { getOneCall, getLonLat } from "../API/call_api";
import moment from "moment";

export const useWeatherData = () => {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    date: "",
    temperature: "",
    feels_like: "",
    weather_icon: "",
    weather_description: "",
    humidity: "",
    dew_point: "",
    pressure: "",
    visibility: "",
    sunrise: "",
    sunset: "",
    wind_speed: "",
    hourlyTemperature: [],
    hourlyHour: [],
    hourlyWindSpeed: [],
    dailyTemperature: [],
    dailyDate: [],
    dailyMinTemp: [],
    dailyMaxTemp: [],
    dailyWeatherIcon: [],
    dailyRain: [],
  });

  const convertToCoordinate = () => {
    getLonLat(cityName)
      .then((data) => {
        const longitude = data.lon;
        const latitude = data.lat;
        getWeatherData(longitude, latitude);
      })
      .catch(() => {
        setError(true);
        setWeatherData({});
      });
  };

  const getWeatherData = async (longitude, latitude) => {
    const data = await getOneCall(longitude, latitude);
    try {
      setWeatherData({
        ...weatherData,
        date: moment.unix(data.current.dt).format("Do MMMM, HH:mm"),
        temperature: data.current.temp,
        feels_like: data.current.feels_like,
        weather_icon: data.current.weather[0].icon,
        weather_description: data.current.weather[0].description,
        humidity: data.current.humidity,
        dew_point: data.current.dew_point,
        pressure: data.current.pressure,
        visibility: data.current.visibility / 1000,
        sunrise: moment.unix(data.current.sunrise).format("HH:mm"),
        sunset: moment.unix(data.current.sunset).format("HH:mm"),
        wind_speed: (data.current.wind_speed * 3.6).toFixed(2),
        hourlyTemperature: data.hourly.slice(1, 25).map((hour) => {
          return hour.temp;
        }),
        hourlyHour: data.hourly.slice(1, 25).map((hour) => {
          return moment.unix(hour.dt).format("HH:mm");
        }),
        hourlyWindSpeed: data.hourly.slice(1, 25).map((hour) => {
          return (hour.wind_speed * 3.6).toFixed(2);
        }),
        dailyTemperature: data.daily.map((dailyTemp) => {
          return dailyTemp.temp.day;
        }),
        dailyDate: data.daily.map((date) => {
          return moment.unix(date.dt).format("MMMM Do");
        }),
        dailyMaxTemp: data.daily.map((date) => {
          return date.temp.max;
        }),
        dailyMinTemp: data.daily.map((date) => {
          return date.temp.min;
        }),
        dailyWeatherIcon: data.daily.map((date) => {
          return date.weather[0].icon;
        }),
        dailyRain: data.daily.map((date) => {
          return date.rain;
        }),
      });
      setError(false);
    } catch (err) {
      setError(true);
      setWeatherData({});
    }
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertToCoordinate();
    // console.log(weatherData);
  };

  return { cityName, weatherData, error, handleChange, handleSubmit };
};
