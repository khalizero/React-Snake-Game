import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  onCollision,
  onFoodEat,
  gameOver,
} from "../store/reducers/snake-slice";

import GridBoard from "../components/snake/GridBoard";
import SnakeBody from "../components/snake/SnakeBody";
import Food from "../components/snake/Food";
import Confirm from "../components/dialogs/Confirm";

const Snake = () => {
  const dispatch = useDispatch();
  const {
    speed,
    gameOver: { isOpen, text },
  } = useSelector((state) => state.snake);

  let direction = null;
  const timer = useRef(null);

  const snakeMover = useCallback((e) => {
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
        clearInterval(timer.current);
        break;
    }
  }, []);

  useEffect(() => {
    document.title = "The Reactive Snake";

    if (isOpen) {
      clearInterval(timer.current);
      document.removeEventListener("keyup", snakeMover);
    }

    if (!isOpen) {
      document.addEventListener("keyup", snakeMover);
    }
  }, [isOpen]);

  const moveSnake = (action, speed = 200) => {
    clearInterval(timer.current);

    timer.current = setInterval(() => {
      dispatch(action());
      dispatch(onFoodEat(direction));
      dispatch(onCollision());
    }, speed);
  };

  const gameOverHander = () => {
    dispatch(gameOver());
  };

  return (
    <>
      <Confirm
        title={text || ""}
        buttons={[
          { type: "confirm", text: "Play Again", onClick: gameOverHander },
        ]}
      />

      <GridBoard>
        <SnakeBody />
        <Food />
      </GridBoard>
    </>
  );
};

export default Snake;
