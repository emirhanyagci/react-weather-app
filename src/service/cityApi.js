import { geoApiOptions } from "../service/api";
import { toast } from "react-hot-toast";
import axios from "axios";

export async function getCities(inputValue = "", limit = 5) {
  const options = {
    ...geoApiOptions,
    params: {
      namePrefix: inputValue,
      minPopulation: 1000000,
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
