export default function ForecastWeatherItem() {
  return (
    <li className="heading-xs space-y-2 text-center">
      <span className=" text-base-200">Mon</span>
      <img className="w-10" src="/images/status/storm-night.png" alt="" />
      <div className="flex flex-col">
        <span>32ºc</span>
        <span className="text-base-400">26ºc</span>
      </div>
    </li>
  );
}
