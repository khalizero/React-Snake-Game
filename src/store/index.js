import { configureStore } from "@reduxjs/toolkit";
import snakeSlice from "./reducers/snake-slice";

const store = configureStore({
  reducer: {
    snake: snakeSlice,
  },
});
export default store;
