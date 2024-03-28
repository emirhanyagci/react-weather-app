import CardContainer from "./CardContainer";

export default function WeatherCurrent() {
  return (
    <CardContainer>
      <div className="flex h-72 w-full flex-col justify-between rounded-lg bg-todayResultDark bg-cover ">
        <header className="flex flex-col p-5">
          <span className="heading-sm">Istanbul TR</span>
          <span className="text-xsmall">Monday, May 15, 2023</span>
        </header>
        <div className="flex items-end justify-between">
          <div className="p-5">
            <div className="heading-xl">28ºc</div>
            <div className="flex flex-col">
              <span className="heading-sm">26ºc / 32ºc</span>
              <span className="text-small">Few clouds</span>
            </div>
          </div>
          <img className="w-40" src="/images/status/fewclouds-day.png" alt="" />
        </div>
      </div>
    </CardContainer>
  );
}
