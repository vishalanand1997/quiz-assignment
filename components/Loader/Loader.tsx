import { CircularProgress } from "@mui/material";
import React from "react";
import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style.loader__container}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
