import axios from "axios";
import { toast } from "react-hot-toast";
import { weatherApiKey } from "./api";
export async function getWeather(lat, lon) {
  const options = {
    url: "https://api.openweathermap.org/data/3.0/onecall",
    params: {
      units: "metric",
      lat,
      exclude: "hourly,minutely",
      lon,
      appid: weatherApiKey,
      dt: Math.floor(Date.now() / 1000),
    },
  };
  let response;
  try {
    response = (await axios(options)).data;
  } catch (err) {
    toast.error(err.message);
  }
  return response;
}
