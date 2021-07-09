const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5";

export const getLonLat = async (cityName) => {
  const res = await fetch(`${baseUrl}/weather?q=${cityName}&appid=${apiKey}`);

  const { coord } = await res.json();

  return coord;
};

export const getOneCall = async (lon, lat) => {
  const res = await fetch(
    `${baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`
  );

  const data = await res.json();

  return data;
};
