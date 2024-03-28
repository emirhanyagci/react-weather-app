import CardContainer from "./CardContainer";
import WeatherDetailItem from "./WeatherDetailItem";

export default function WeatherDetails() {
  return (
    <CardContainer py={false}>
      <ul>
        {Array.from({ length: 5 }, (v, i) => i).map((item, index) => (
          <WeatherDetailItem key={index} />
        ))}
      </ul>
    </CardContainer>
  );
}
