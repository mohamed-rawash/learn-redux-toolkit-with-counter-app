
import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "increase":
//       return { ...state, value: state.value + 1 };
//     case "increase-five":
//       return { ...state, value: state.value + action.payload.factor };
//     case "decrease":
//       return {
//         ...state,
//         value: state.value > 0 ? state.value - 1 : state.value,
//       };
//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: {
    mohsen: counterReducer,
  },
});
