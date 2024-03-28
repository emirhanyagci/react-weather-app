export function isDay(timezoneOffset) {
  var hours = new Date(
    new Date().getTime() + timezoneOffset * 1000,
  ).getUTCHours();
  console.log(timezoneOffset);
  if (hours >= 6 && hours < 18) return true;
  return false;
}
