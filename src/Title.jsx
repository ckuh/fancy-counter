import PropTypes from "prop-types";
export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Fancy Counter <b>(Locked)</b>
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

Title.propTypes = {
  locked: PropTypes.bool,
};
