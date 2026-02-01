import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import timerReducer from "./timerSlice";
import answersReducer from "./answersSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer,
    answers: answersReducer,
  },
});
