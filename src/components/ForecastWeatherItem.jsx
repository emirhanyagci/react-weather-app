import PropTypes from "prop-types";
import { weatherIcons } from "../utils/imageById";
export default function ForecastWeatherItem({ data }) {
  const { dt, temp, weather } = data;
  const day = new Date(dt * 1000).toLocaleString("en-us", { weekday: "short" });
  const iconId = weather[0].icon.slice(0, -1);
  return (
    <li className="heading-xs flex flex-col justify-between space-y-2 text-center">
      <span className=" text-base-200">{day}</span>
      <div className="grid place-content-center">
        <img className="w-10" src={weatherIcons[iconId]["day"]} alt="" />
      </div>
      <div className="flex flex-col">
        <span>{Math.round(temp.max)}ºc</span>
        <span className="text-base-400">{Math.round(temp.min)}ºc</span>
      </div>
    </li>
  );
}

ForecastWeatherItem.propTypes = {
  data: PropTypes.object.isRequired,
};
