import { geoApiOptions } from "../service/api";
import { toast } from "react-hot-toast";
import axios from "axios";

export async function getCities(inputValue = "", limit = 5) {
  const options = {
    ...geoApiOptions,
    params: {
      namePrefix: inputValue,
      minPopulation: 100000,
      limit,
    },
  };
  let response = [];
  try {
    response = (await axios(options)).data.data;
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return response;
}
export async function getCity(lat, lon) {
  const options = {
    ...geoApiOptions,
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: {
      location: `${lat}+${lon}`,
      limit: 1,
    },
  };
  let response = [];
  try {
    response = (await axios(options)).data.data[0];
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return response;
}
