import { useWeatherContext } from "../context/WeatherContext";
import CardContainer from "./CardContainer";
import ForecastWeatherItem from "./ForecastWeatherItem";
export default function ForecastWeather() {
  const { weatherData } = useWeatherContext();
  const forecastWeather = weatherData.forecastWeather;
  return (
    <CardContainer>
      <ul className="flex justify-around">
        {forecastWeather.map((forecastData, index) => (
          <ForecastWeatherItem data={forecastData} key={index} />
        ))}
      </ul>
    </CardContainer>
  );
}
