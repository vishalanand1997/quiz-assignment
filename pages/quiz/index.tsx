import CountDownTimer from "@/components/CountDownTimer/CountDownTimer";
import Loader from "@/components/Loader/Loader";
import QuizQuestionsWithOptions from "@/components/QuizQuestionsWithOptions/QuizQuestionsWithOptions";
import { Result } from "@/models/quiz.response";
import { setQuizAPIResponse, setQuizUserResponse } from "@/store/actions/quiz";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import Head from "next/head";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import useSWR from "swr";

interface IProps {
  storeQuizApiResponse: (results: Result[]) => void;
  setQuizForUserResponse: (length: number) => void;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function QuizPage(props: IProps) {
  const { data, isLoading, error } = useSWR(
    "https://opentdb.com/api.php?amount=15",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <Loader />;
  }
  if (data.results) {
    props.storeQuizApiResponse(data.results);
    props.setQuizForUserResponse(data.results.length);
  }
  return (
    <Fragment>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Quiz page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CountDownTimer />
      <QuizQuestionsWithOptions response={data.results} />
    </Fragment>
  );
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    storeQuizApiResponse: (results: Result[]) =>
      dispatch(setQuizAPIResponse(results)),
    setQuizForUserResponse: (length: number) =>
      dispatch(setQuizUserResponse(length)),
  };
};
export default connect(null, mapDispatchToProps)(QuizPage);
