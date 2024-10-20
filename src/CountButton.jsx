import PropTypes from "prop-types";

export default function CountButton({ disabled = false, setCount, Icon }) {
  return (
    <button
      disabled={disabled}
      className="count-btn"
      onClick={(e) => {
        setCount();
        e.currentTarget.blur();
      }}
    >
      <Icon className="count-btn-icon" />
    </button>
  );
}

CountButton.propTypes = {
  disabled: PropTypes.bool,
  setCount: PropTypes.func,
  Icon: PropTypes.elementType,
};
