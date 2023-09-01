import { IUserResponse, Result } from "@/models/quiz.response";
import * as actionTypes from "./actionTypes";

export const setQuizAPIResponse = (results: Result[]) => {
  return {
    type: actionTypes.action.STORE_QUIZ_API_RESPONSE,
    results: results,
  };
};

export const setQuizUserResponse = (length: number) => {
  return {
    type: actionTypes.action.SET_RESPONSE_FOR_USER,
    length: length,
  };
};

export const updateQuizUserResponse = (item: IUserResponse, index: number) => {
  return {
    type: actionTypes.action.RESPONSE_FROM_USER,
    response: { ...item, index },
  };
};

export const setUserEmailId = (email: string) => {
  return {
    type: actionTypes.action.SET_USER_EMAIL,
    email,
  };
};
