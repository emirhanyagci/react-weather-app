import ForecastWeather from "../components/ForecastWeather";
import WeatherCurrent from "../components/WeatherCurrent";
import WeatherDetails from "../components/WeatherDetails";
import { useWeatherContext } from "../context/WeatherContext";

export default function Weather() {
  const { weatherData } = useWeatherContext();
  console.log(weatherData);
  return (
    <section className="space-y-2">
      <WeatherCurrent />
      <WeatherDetails />
      <ForecastWeather />
    </section>
  );
}
