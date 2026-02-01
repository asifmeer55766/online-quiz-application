import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAnswers: JSON.parse(localStorage.getItem("userAnswers")) || {},
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    saveAnswer: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      state.userAnswers[questionId] = selectedOption;
      localStorage.setItem("userAnswers", JSON.stringify(state.userAnswers));
    },
    resetAnswers: (state) => {
      state.userAnswers = {};
      localStorage.removeItem("userAnswers");
    },
  },
});

export const { saveAnswer, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;
