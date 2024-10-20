import { useEffect, useState } from "react";

import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setCount((prevCount) => {
          const newCount = prevCount + 1;

          if (newCount > 5) {
            return prevCount;
          }

          return newCount;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} size="lg" />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
