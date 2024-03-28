import CardContainer from "./CardContainer";
import ForecastWeatherItem from "./ForecastWeatherItem";
export default function ForecastWeather() {
  return (
    <CardContainer>
      <ul className="flex justify-around">
        {Array.from({ length: 5 }, (v, i) => i).map((item, index) => (
          <ForecastWeatherItem key={index} />
        ))}
      </ul>
    </CardContainer>
  );
}
