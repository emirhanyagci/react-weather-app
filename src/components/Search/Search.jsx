import AsyncSelect from "react-select/async";
import { components } from "react-select";
import searchStyle from "./searchStyle";
import SpinnerMini from "../SpinnerMini";
import { getCities, getCity } from "../../service/cityApi";
import { getWeather } from "../../service/weatherApi";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeatherContext } from "../../context/WeatherContext";
const LoadingIndicator = (props) => <SpinnerMini {...props}></SpinnerMini>;
const Input = (props) => <components.Input {...props} maxLength={30} />;

export default function Search() {
  const timeoutRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const { setWeatherData } = useWeatherContext();
  function fetchWeatherData(city, lat, lon) {
    return getWeather(lat, lon)
      .then(({ timezone_offset, current, daily }) => {
        const forecastData = daily.slice(0, 5);
        setWeatherData({
          city,
          timezoneOffset: timezone_offset,
          currentWeather: current,
          forecastWeather: forecastData,
        });
        navigate("/weather");
      })
      .finally(() => {
        setIsFetching(false);
      });
  }
  function findLocation() {
    setIsFetching(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const city = await getCity(coords.latitude, coords.longitude);
        fetchWeatherData(city, coords.latitude, coords.longitude);
      },
      (err) => {
        throw new Error(err);
      },
    );
  }
  const loadOptions = (inputValue, callback) => {
    setIsFetching(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      const cities = await getCities(inputValue);
      const filteredCities = cities.map((city) => {
        return {
          value: { lat: city.latitude, lon: city.longitude, city },
          label: `${city.city} - ${city.countryCode}`,
        };
      });
      callback(filteredCities);
      setIsFetching(false);
    }, 1000);
  };

  async function onChangeHandler(selectedValue) {
    setIsFetching(true);
    const { city, lat, lon } = selectedValue.value;
    fetchWeatherData(city, lat, lon);
  }

  return (
    <div className="flex">
      <AsyncSelect
        className="w-full"
        styles={searchStyle}
        placeholder="Search location"
        cacheOptions
        isLoading={isFetching}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          LoadingIndicator,
          Input,
        }}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
        defaultOptions
      />
      <button onClick={findLocation} className="w-10" title="Find my location">
        📍
      </button>
    </div>
  );
}
