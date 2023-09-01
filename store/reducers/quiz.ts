import { quiz } from "../initialState";
import * as actionTypes from "../actions/actionTypes";
import { IUserResponse } from "@/models/quiz.response";
import { IActionTypes, IState } from "../initialStateType";

const setReponseForUser = (state: IState, length: number) => {
  const skeletonUserResponse = [...Array(length)].map((_) => ({
    isVisited: false,
    selectedAnswer: "",
  }));
  return { ...state, userQuizResponse: skeletonUserResponse };
};
const reducer = (state = quiz, action: IActionTypes) => {
  switch (action.type) {
    case actionTypes.action.STORE_QUIZ_API_RESPONSE:
      return { ...state, quizApiResponse: action.results };
    case actionTypes.action.SET_RESPONSE_FOR_USER:
      return setReponseForUser(state, action.length);
    case actionTypes.action.RESPONSE_FROM_USER:
      const { response } = action;
      return {
        ...state,
        userQuizResponse: state.userQuizResponse.map(
          (item: IUserResponse, i: number) =>
            i === response.index
              ? {
                  isVisited: response.isVisited,
                  selectedAnswer: response.selectedAnswer,
                }
              : item
        ),
      };
    case actionTypes.action.SET_USER_EMAIL:
      return { ...state, userEmail: action.email };
    default:
      return state;
  }
};
export default reducer;
