import PropTypes from "prop-types";

export default function Count({ number = 0 }) {
  return <p className="count">{number}</p>;
}

Count.propTypes = {
  number: PropTypes.number,
};
