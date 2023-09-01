import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/quiz";

export const store = configureStore({
  reducer: quizReducer,
});

export const makeStore = () => {
  return store;
};
