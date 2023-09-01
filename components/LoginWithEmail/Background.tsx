import { Grid } from "@mui/material";
import React from "react";
import style from "./LoginWithEmail.module.css";

interface IProps {
  children: React.ReactNode;
}
function Background(props: IProps) {
  return (
    <Grid item container className={style.login__container}>
      <Grid item lg={12} md={12} xs={12}>
        <img
          src="https://www.joshtalks.com/wp-content/themes/josh_talks/img/josh-logo.svg"
          alt="Josh talk"
        />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default Background;
