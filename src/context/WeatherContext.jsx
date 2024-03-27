import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

import PropTypes from "prop-types";

WeatherContextProvider.propTypes = {
  children: PropTypes.node,
};
export function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === null) {
    throw new Error("the weather data not found");
  }
  return context;
}
