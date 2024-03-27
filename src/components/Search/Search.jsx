import AsyncSelect from "react-select/async";
import searchStyle from "./searchStyle";
import SpinnerMini from "../SpinnerMini";
import { getCities } from "../../service/cityApi";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../../service/weatherApi";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeatherContext } from "../../context/WeatherContext";
const LoadingIndicator = (props) => <SpinnerMini {...props}></SpinnerMini>;

export default function Search() {
  const timeoutRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const { setWeatherData } = useWeatherContext();
  const loadOptions = (inputValue, callback) => {
    setIsFetching(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const cities = await getCities(inputValue);
      const filteredCities = cities.map((city) => {
        return {
          value: { lat: city.latitude, lon: city.longitude },
          label: `${city.city} - ${city.countryCode}`,
        };
      });
      callback(filteredCities);
      setIsFetching(false);
    }, 1000);
  };
  async function onChangeHandler(selectedValue) {
    setIsFetching(true);
    const currentWeather = getCurrentWeather(selectedValue.value);
    const forecastWeather = getForecastWeather(selectedValue.value);
    Promise.all([currentWeather, forecastWeather])
      .then(([currentWeather, forecastWeather]) => {
        setWeatherData({ currentWeather, forecastWeather });
        navigate("/weather");
      })
      .finally(() => {
        setIsFetching(false);
      });
  }
  return (
    <AsyncSelect
      styles={searchStyle}
      placeholder="Search location"
      cacheOptions
      isLoading={isFetching}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        LoadingIndicator,
      }}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      defaultOptions
    />
  );
}
