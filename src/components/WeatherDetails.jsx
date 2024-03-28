import { useWeatherContext } from "../context/WeatherContext";
import CardContainer from "./CardContainer";
import WeatherDetailItem from "./WeatherDetailItem";

export default function WeatherDetails() {
  const { weatherData } = useWeatherContext();
  const { feels_like, clouds, wind_speed, humidity, uvi } =
    weatherData.currentWeather;

  return (
    <CardContainer py={false}>
      <ul>
        <WeatherDetailItem
          label="Thermal sensation"
          value={Math.round(feels_like) + "ºc"}
          icon="thermometer.svg"
        />
        <WeatherDetailItem
          label="Probability of rain"
          value={Math.round(clouds) + "%"}
          icon="cloud-rain.svg"
        />
        <WeatherDetailItem
          label="Wind speed"
          value={Math.round(wind_speed) + " m/s"}
          icon="wind.svg"
        />
        <WeatherDetailItem
          label="Air humidity"
          value={Math.round(humidity) + "%"}
          icon="drop.svg"
        />{" "}
        <WeatherDetailItem label="UV Index" value={uvi} icon="sun.svg" />
      </ul>
    </CardContainer>
  );
}
