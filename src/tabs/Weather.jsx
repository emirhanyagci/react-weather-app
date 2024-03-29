import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForecastWeather from "../components/ForecastWeather";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherDetails from "../components/WeatherDetails";
import { useWeatherContext } from "../context/WeatherContext";
import NavigateButton from "../components/NavigateButton";

export default function Weather() {
  const { weatherData } = useWeatherContext();
  console.log(weatherData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!weatherData?.currentWeather) navigate("/");
  }, []);

  return (
    <section className="relative space-y-2">
      <NavigateButton />

      {weatherData ? (
        <>
          <WeatherCurrent />
          <WeatherDetails />
          <ForecastWeather />
        </>
      ) : null}
    </section>
  );
}
