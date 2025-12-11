import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
const store = configureStore({
  reducer: {
    data: globalSlice,
  },
});

export default store;
