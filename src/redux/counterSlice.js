import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1, // starting question
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      if (state.value > 1) state.value -= 1; // prevent going below 1
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
