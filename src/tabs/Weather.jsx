import { useWeatherContext } from "../context/WeatherContext";

export default function Weather() {
  const { weatherData } = useWeatherContext();
  console.log(weatherData);
  return <div>Weather</div>;
}
