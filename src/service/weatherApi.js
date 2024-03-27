import axios from "axios";
import { toast } from "react-hot-toast";
import { weatherApiKey } from "./api";
export async function getCurrentWeather({ lat, lon }) {
  const options = {
    url: "https://api.openweathermap.org/data/3.0/onecall/timemachine?&units=metric",
    params: {
      lat,
      lon,
      appid: weatherApiKey,
      dt: Math.floor(Date.now() / 1000),
    },
  };
  let response;
  try {
    response = (await axios(options)).data.data[0];
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return response;
}
export function getForecastWeather(lat, lon) {}
