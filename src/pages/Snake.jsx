import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  onCollision,
  onFoodEat,
} from "../store/reducers/snake-slice";

import GridBoard from "../components/snake/GridBoard";
import SnakeBody from "../components/snake/SnakeBody";
import Food from "../components/snake/Food";

const Snake = () => {
  const dispatch = useDispatch();
  let direction = null;
  const { speed } = useSelector((state) => state.snake);

  let timer;

  useEffect(() => {
    document.title = "The Reactive Snake";
    clearInterval(timer);

    document.addEventListener("keyup", function (e) {
      switch (e.key) {
        case "ArrowUp":
          if (direction == null) {
            direction = "up";
          }
          if (direction != "down") {
            moveSnake(moveUp, speed);
            direction = "up";
          }
          break;
        case "ArrowDown":
          if (direction == null) {
            direction = "down";
          }
          if (direction != "up") {
            moveSnake(moveDown, speed);
            direction = "down";
          }
          break;
        case "ArrowRight":
          if (direction == null) {
            direction = "right";
          }
          if (direction != "left") {
            moveSnake(moveRight, speed);
            direction = "right";
          }
          break;
        case "ArrowLeft":
          if (direction == null) {
            direction = "left";
          }
          if (direction != "right") {
            moveSnake(moveLeft, speed);
            direction = "left";
          }
          break;

        default:
          clearInterval(timer);
          break;
      }
    });
  }, []);

  const moveSnake = (action, speed = 200) => {
    clearInterval(timer);

    timer = setInterval(() => {
      dispatch(action());
      dispatch(onFoodEat(direction));
      dispatch(onCollision());
    }, speed);
  };

  return (
    <GridBoard>
      <SnakeBody />
      <Food />
    </GridBoard>
  );
};

export default Snake;
