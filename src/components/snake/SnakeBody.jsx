import React from "react";
import { useSelector } from "react-redux";

import "../../styles/SnakeBody.scss";

const SnakeBody = (props) => {
  const { size: snakeSize } = useSelector((state) => state.snake);

  return snakeSize.map((snake, index) => (
    <div
      key={JSON.stringify(snake) + index}
      className={index == 0 ? "snake head" : "snake"}
      style={{ gridRowStart: snake.x, gridColumnStart: snake.y }}
    ></div>
  ));
};

export default SnakeBody;
