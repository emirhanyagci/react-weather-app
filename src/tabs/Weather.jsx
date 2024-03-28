import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForecastWeather from "../components/ForecastWeather";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherDetails from "../components/WeatherDetails";
import { useWeatherContext } from "../context/WeatherContext";

export default function Weather() {
  const { weatherData } = useWeatherContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!weatherData) navigate("/");
  }, []);

  return (
    <section className="space-y-2">
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
