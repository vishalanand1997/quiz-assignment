import { Typography } from "@mui/material";
import React from "react";
import style from "./HeaderText.module.css";

interface IProps {
  label: string;
}
function HeaderText(props: IProps) {
  const { label } = props;
  return (
    <div className={style.header_text_container}>
      <Typography variant="h4" color={"white"}>
        {label}
      </Typography>
    </div>
  );
}

export default HeaderText;
