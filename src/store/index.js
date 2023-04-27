import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducers/filter";

const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export default store;
