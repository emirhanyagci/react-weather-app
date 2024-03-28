import axios from "axios";
import { toast } from "react-hot-toast";
import { weatherApiKey } from "./api";
export async function getCurrentWeather({ lat, lon }) {
  const options = {
    url: "https://api.openweathermap.org/data/3.0/onecall/timemachine",
    params: {
      units: "metric",
      lat,
      lon,
      appid: weatherApiKey,
      dt: Math.floor(Date.now() / 1000),
    },
  };
  let response;
  try {
    response = (await axios(options)).data;
    console.log(response);
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return response;
}
export async function getForecastWeather({ lat, lon }) {
  console.log(lat, lon);
  const options = {
    url: "https://api.openweathermap.org/data/2.5/forecast",
    params: {
      units: "metric",

      lat,
      lon,
      appid: weatherApiKey,
    },
  };
  let response = [];
  let filteredResponse = [];
  try {
    response = (await axios(options)).data.list;
  } catch (err) {
    toast.error(err.response.data.message);
  }
  for (let i = 0; i < 5; i++) {
    filteredResponse[i] = response[8 * i];
  }
  return filteredResponse;
}
