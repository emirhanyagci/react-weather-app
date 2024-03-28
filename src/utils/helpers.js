export function isDay(timezoneOffset) {
  console.log(timezoneOffset);
  var hours = new Date(
    new Date().getTime() + timezoneOffset * 1000,
  ).getUTCHours();
  console.log(hours);
  if (hours >= 6 && hours < 18) return true;
  return false;
}
