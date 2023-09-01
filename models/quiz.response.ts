export interface RootObject {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: Type;
}

export enum Difficulty {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export enum Type {
  Boolean = "boolean",
  Multiple = "multiple",
}

export interface IUserResponse {
  isVisited: boolean;
  selectedAnswer: string;
  index?: number;
}
