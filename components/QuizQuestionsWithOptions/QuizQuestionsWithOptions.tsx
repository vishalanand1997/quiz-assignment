import { Difficulty, IUserResponse, Result } from "@/models/quiz.response";
import React, { useEffect, useState } from "react";
import GenericPagination from "../GenericPagination/GenericPagination";
import Card from "../Card/Card";
import Background from "../LoginWithEmail/Background";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import style from "./QuizQuestionsWithOptions.module.css";
import GenericChip from "../GenericChip/GenericChip";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateQuizUserResponse } from "@/store/actions/quiz";
import { IState } from "@/store/initialStateType";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import DialogBox from "../DialogBox/DialogBox";

interface IProps {
  response: Result[];
  userQuizResponse: IUserResponse[];
  updateUserResponse: (item: IUserResponse, index: number) => void;
}
function QuizQuestionsWithOptions(props: IProps) {
  const { response, userQuizResponse, updateUserResponse } = props;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showSubmitQuiz, setShowSubmitQuiz] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserResponse(
      {
        selectedAnswer: (event.target as HTMLInputElement).value,
        isVisited: true,
      },
      currentPage
    );
  };
  const quizOptionByType = (options: string[]) => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={userQuizResponse[currentPage].selectedAnswer}
          onChange={handleChange}
        >
          {options.map((option: string, index: number) => (
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              key={index}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };
  const quizChipByDifficulty = (difficulty: Difficulty) => {
    switch (difficulty) {
      case Difficulty.Easy:
        return (
          <GenericChip
            label={difficulty}
            colorName={"secondary"}
            key={difficulty}
          />
        );
      case Difficulty.Medium:
        return (
          <GenericChip label={difficulty} colorName={"info"} key={difficulty} />
        );
      case Difficulty.Hard:
        return (
          <GenericChip
            label={difficulty}
            colorName={"warning"}
            key={difficulty}
          />
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    currentPage + 1 === response.length
      ? setShowSubmitQuiz(true)
      : setShowSubmitQuiz(false);
    if (userQuizResponse[currentPage].selectedAnswer.length === 0) {
      updateUserResponse({ selectedAnswer: "", isVisited: true }, currentPage);
    }
  }, [currentPage]);
  return (
    <Background>
      <Card width={800} height={320}>
        <DialogBox
          btnLabel="All Questions"
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          questions={response.map(
            (item, index) => `Q${index + 1}. ${item.question}`
          )}
          setQuestionFromList={setCurrentPage}
        />
        <h2
          dangerouslySetInnerHTML={{
            __html: `Q${currentPage + 1}. ${response[currentPage].question}`,
          }}
        />
        {quizChipByDifficulty(response[currentPage].difficulty)}
        <div>
          {quizOptionByType(
            response[currentPage].incorrect_answers.concat(
              response[currentPage].correct_answer
            )
          )}
        </div>
        {showSubmitQuiz && (
          <div className={style.submit_quiz_container}>
            <Button
              type="button"
              label="Submit Quiz"
              trigger={() => router.push("/report")}
            />
          </div>
        )}
        <GenericPagination
          numberOfPages={response.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Card>
    </Background>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    userQuizResponse: state.userQuizResponse,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    updateUserResponse: (item: IUserResponse, index: number) =>
      dispatch(updateQuizUserResponse(item, index)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizQuestionsWithOptions);
