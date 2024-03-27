export const geoApiOptions = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GEO_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_GEO_API_HOST,
  },
};
export const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
