import { createSlice } from "@reduxjs/toolkit";

// Load saved timer state from localStorage (if any)
// const savedTime = localStorage.getItem("quizTimeLeft");
// const savedRunning = localStorage.getItem("quizIsRunning");
const savedTime = 60 * 10;
const savedRunning = false;

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timeLeft: savedTime ? parseInt(savedTime, 10) : 60 * 10, // 10 min default
    isRunning: savedRunning ? JSON.parse(savedRunning) : false,
  },
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
      localStorage.setItem("quizIsRunning", true);
    },
    decrementTime: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
        localStorage.setItem("quizTimeLeft", state.timeLeft);
      } else {
        state.isRunning = false;
        localStorage.setItem("quizIsRunning", false);
      }
    },
    resetTimer: (state) => {
      state.timeLeft = savedTime;
      state.isRunning = false;
      localStorage.setItem("quizTimeLeft", state.timeLeft);
      localStorage.setItem("quizIsRunning", false);
    },
  },
});

export const { startTimer, decrementTime, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
