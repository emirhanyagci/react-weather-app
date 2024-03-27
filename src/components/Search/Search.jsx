import AsyncSelect from "react-select/async";
import searchStyle from "./searchStyle";
import SpinnerMini from "../SpinnerMini";
import { getCities } from "../../service/cityApi";
import { getCurrentWeather } from "../../service/weatherApi";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useWeatherContext } from "../../context/WeatherContext";
const LoadingIndicator = (props) => <SpinnerMini {...props}></SpinnerMini>;

export default function Search() {
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const { setWeatherData } = useWeatherContext();
  const loadOptions = (inputValue, callback) => {
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
    }, 1000);
  };
  async function onChangeHandler(selectedValue) {
    const currentWeather = getCurrentWeather(selectedValue.value);
    Promise.all([currentWeather]).then(([currentWeather]) => {
      setWeatherData({ currentWeather });
      navigate("/weather");
    });
  }
  return (
    <AsyncSelect
      styles={searchStyle}
      placeholder="Search location"
      cacheOptions
      //isLoading
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
