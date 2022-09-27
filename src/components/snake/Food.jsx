import React from "react";
import { useSelector } from "react-redux";
import { FaAppleAlt } from "react-icons/fa";

const Food = () => {
  const { foodPos } = useSelector((state) => state.snake);

  return (
    <FaAppleAlt
      className="snakeFood"
      style={{ gridRowStart: foodPos.x, gridColumnStart: foodPos.y }}
    />
  );
};

export default Food;
