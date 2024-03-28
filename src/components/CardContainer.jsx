import PropTypes from "prop-types";

export default function CardContainer({ children, px = true, py = true }) {
  return (
    <div
      className={`w-full rounded-xl bg-base-800 ${px ? "px-3" : null} ${py ? "py-3" : null}`}
    >
      {children}
    </div>
  );
}

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  px: PropTypes.bool,
  py: PropTypes.bool,
};
