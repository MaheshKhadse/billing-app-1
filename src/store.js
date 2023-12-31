// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // Additional middleware, enhancers, and configuration if needed
});

export default store;
