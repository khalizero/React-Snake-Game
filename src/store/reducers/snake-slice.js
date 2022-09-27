import { createSlice } from "@reduxjs/toolkit";
import { randomPos } from "../../hooks/RandomFood";

const initialState = {
  direction: null,
  speed: 100,
  foodPos: randomPos(),
  size: [
    {
      x: 25,
      y: 25,
    },
    {
      x: 24,
      y: 25,
    },
    {
      x: 23,
      y: 25,
    },
    {
      x: 22,
      y: 25,
    },
  ],
  gameOver: false,
};

const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setDirection(state, action) {
      state.direction = action.payload;
    },
    onFoodEat(state, action) {
      if (JSON.stringify(state.foodPos) === JSON.stringify(state.size[0])) {
        switch (action.payload) {
          case "up":
            state.size.push({ x: state.size[0].x++, y: state.size[0].y });
            break;
          case "down":
            state.size.push({ x: state.size[0].x--, y: state.size[0].y });
            break;
          case "left":
            state.size.push({ x: state.size[0].x, y: state.size[0].y++ });
            break;
          case "right":
            state.size.push({ x: state.size[0].x, y: state.size[0].y-- });
            break;

          default:
            break;
        }

        console.log(action.payload);
        state.foodPos = randomPos();
        console.log("matched");
      }
    },
    onCollision(state) {
      if (
        state.size[0].x < 1 ||
        state.size[0].y < 1 ||
        state.size[0].x > 30 ||
        state.size[0].y > 30
      ) {
        console.log("Snake has collided with the wall");
      }

      state.size.forEach((_, index) => {
        if (index > 2) {
          if (
            JSON.stringify(state.size[0]) === JSON.stringify(state.size[index])
          ) {
            console.log("Snake has eaten itself");
          }
        }
      });
    },
    setspeed(state, action) {
      state.speed = action.payload;
    },
    moveUp(state) {
      for (let i = state.size.length - 1; i >= 1; i--) {
        state.size[i] = { ...state.size[i - 1] };
      }
      state.size[0].x--;
    },
    moveDown(state) {
      for (let i = state.size.length - 1; i >= 1; i--) {
        state.size[i] = { ...state.size[i - 1] };
      }
      state.size[0].x++;
    },
    moveRight(state) {
      for (let i = state.size.length - 1; i >= 1; i--) {
        state.size[i] = { ...state.size[i - 1] };
      }
      state.size[0].y++;
    },
    moveLeft(state) {
      for (let i = state.size.length - 1; i >= 1; i--) {
        state.size[i] = { ...state.size[i - 1] };
      }
      state.size[0].y--;
    },
  },
});

export const {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  onFoodEat,
  setspeed,
  setDirection,
  onCollision,
} = snakeSlice.actions;
export default snakeSlice.reducer;
