import PropTypes from "prop-types";

export default function CountButton({ setCount, Icon }) {
  return (
    <button className="count-btn" onClick={() => setCount()}>
      <Icon className="count-btn-icon" />
    </button>
  );
}

CountButton.propTypes = {
  setCount: PropTypes.func,
  Icon: PropTypes.elementType,
};
