import PropTypes from "prop-types";

export default function WeatherDetailItem({ label, value, icon }) {
  return (
    <li className="flex items-center justify-between border-b-[1px] border-b-base-700 py-4 last:border-none">
      <div className="flex items-center space-x-3">
        <img src={`/icons/${icon}`} alt="" />
        <span className="heading-xs text-base-200">{label}</span>
      </div>
      <div className="heading-sm">{value}</div>
    </li>
  );
}

WeatherDetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  icon: PropTypes.string.isRequired,
};
