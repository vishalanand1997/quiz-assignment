import { Grid, Pagination } from "@mui/material";
import React from "react";
import style from "./GenericPagination.module.css";

interface IProps {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: (val: number) => void;
}
function GenericPagination(props: IProps) {
  const { numberOfPages, currentPage, setCurrentPage } = props;

  const handlePagination = (page: number) => {
    setCurrentPage(page - 1);
  };
  return (
    <Grid item lg={12} md={12} xs={12}>
      <div className={style.genericPagination_container}>
        <Pagination
          count={numberOfPages}
          shape="rounded"
          size="small"
          page={currentPage + 1}
          onChange={(e: React.ChangeEvent<unknown>, page: number) => handlePagination(page)}
        />
      </div>
    </Grid>
  );
}

export default GenericPagination;
