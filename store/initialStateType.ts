import { IUserResponse, Result } from "@/models/quiz.response";
import { action } from "./actions/actionTypes";

export interface IState {
  userEmail: string;
  quizApiResponse: Result[];
  userQuizResponse: IUserResponse[];
}
export interface IActionA {
  type: action.STORE_QUIZ_API_RESPONSE;
  results: Result[];
}
export interface IActionB {
  type: action.SET_RESPONSE_FOR_USER;
  length: number;
}
export interface IActionC {
  type: action.RESPONSE_FROM_USER;
  response: IUserResponse;
}
export interface IActionUserEmail {
  type: action.SET_USER_EMAIL;
  email: string;
}
export type IActionTypes = IActionA | IActionB | IActionC | IActionUserEmail;
