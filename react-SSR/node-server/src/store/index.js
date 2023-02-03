import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modules/home";

const store = configureStore({
  reducer: {
    home: counterSlice,
  },
  devTools: true,
});

export default store;
