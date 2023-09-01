import React, { Fragment, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { IUserResponse, Result } from "@/models/quiz.response";

interface IProps {
  heading: string[];
  userResponse: IUserResponse[];
  quizApiResponse: Result[];
}
function GenericTable(props: IProps) {
  const { heading, userResponse, quizApiResponse } = props;

  const tableHeader = (
    <TableHead>
      <TableRow>
        {heading.map((label: string, index: number) => (
          <TableCell key={index}>
            <strong>{label}</strong>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const tableRow = (
    <>
      {quizApiResponse.map((response: Result, index: number) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <h4
              dangerouslySetInnerHTML={{
                __html: `Q${index + 1}. ${response.question}`,
              }}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            {userResponse[index].selectedAnswer === response.correct_answer ? (
              <Typography variant="inherit" color={"green"}>
                {userResponse[index].selectedAnswer}
              </Typography>
            ) : (
              <>
                {userResponse[index].selectedAnswer ? (
                  <Typography variant="inherit" color={"red"}>
                    {userResponse[index].selectedAnswer}
                  </Typography>
                ) : (
                  "Not Answered"
                )}
              </>
            )}
          </TableCell>
          <TableCell component="th" scope="row">
            {response.correct_answer}
          </TableCell>
          <TableCell component="th" scope="row">
            {userResponse[index].isVisited ? "Yes" : "No"}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
  useEffect(() => {
    if (quizApiResponse.length === 0) {
      alert("No Report found");
    }
  }, []);
  return (
    <Fragment>
      {quizApiResponse.length > 0 && (
        <TableContainer component={Paper} style={{ height: 500 }}>
          <Table
            stickyHeader
            sx={{ minWidth: 650, height: 440 }}
            aria-label="simple table"
          >
            {tableHeader}
            <TableBody>{tableRow}</TableBody>
          </Table>
        </TableContainer>
      )}
    </Fragment>
  );
}

export default GenericTable;
