import GenericTable from "@/components/GenericTable/GenericTable";
import HeaderText from "@/components/HeaderText/HeaderText";
import Background from "@/components/LoginWithEmail/Background";
import { IUserResponse, Result } from "@/models/quiz.response";
import { IState } from "@/store/initialStateType";
import Head from "next/head";
import React, { Fragment } from "react";
import { connect } from "react-redux";

interface IProps {
  userQuizResponse: IUserResponse[];
  quizApiResponse: Result[];
}
function Report(props: IProps) {
  const { quizApiResponse, userQuizResponse } = props;
  return (
    <Fragment>
      <Head>
        <title>Report</title>
        <meta name="description" content="Report page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <HeaderText label="Report" />
        <GenericTable
          heading={["Question", "User Answer", "Correct Answer", "Is Visited"]}
          quizApiResponse={quizApiResponse}
          userResponse={userQuizResponse}
        />
      </Background>
    </Fragment>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    userQuizResponse: state.userQuizResponse,
    quizApiResponse: state.quizApiResponse,
  };
};

export default connect(mapStateToProps)(Report);
