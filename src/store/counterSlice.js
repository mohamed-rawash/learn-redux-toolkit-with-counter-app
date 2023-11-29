import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value++;
    },
    increaseFive: (state, action) => {
      state.value += action.payload.factor;
    },
    decrease: (state, action) => {
      if (state.value > 0) state.value--;
    },
  },
});
export const { increase, increaseFive, decrease } = counterSlice.actions;
export default counterSlice.reducer;