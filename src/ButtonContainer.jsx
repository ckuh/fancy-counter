import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

import CountButton from "./CountButton";

export default function ButtonContainer({ setCount, locked }) {
  return (
    <div className="button-container">
      <CountButton
        setCount={() =>
          setCount((prev) => {
            const newCount = prev - 1;
            if (newCount > 0) return newCount;
            else return 0;
          })
        }
        Icon={MinusIcon}
      />
      <CountButton
        disabled={locked}
        setCount={() =>
          setCount((prev) => {
            const newCount = prev + 1;
            if (newCount > 5) return 5;
            else return newCount;
          })
        }
        Icon={PlusIcon}
      />
    </div>
  );
}

ButtonContainer.propTypes = {
  setCount: PropTypes.func,
  locked: PropTypes.bool,
};
