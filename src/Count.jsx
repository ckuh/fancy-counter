import PropTypes from "prop-types";

export default function Count({ count = 0 }) {
  return <p className="count">{count}</p>;
}

Count.propTypes = {
  count: PropTypes.number,
};
