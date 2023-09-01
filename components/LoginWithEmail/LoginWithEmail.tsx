import React from "react";
import { TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import style from "./LoginWithEmail.module.css";
import Card from "../Card/Card";
import Background from "./Background";
import Button from "../Button/Button";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { setUserEmailId } from "@/store/actions/quiz";
import { useRouter } from "next/router";

interface IUserInfo {
  email: string;
}
interface IProps {
  setUserEmail: (email: string) => void;
}
function LoginWithEmail(props: IProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserInfo>();
  const { setUserEmail } = props;
  const router = useRouter();

  const handleLoginSubmit = (data: IUserInfo) => {
    setUserEmail(data.email);
    router.push("/quiz");
  };
  return (
    <Background>
      <Card width={350}>
        <Typography
          sx={{ fontSize: 25, marginBottom: 2 }}
          color="text.secondary"
        >
          Login with email
        </Typography>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <TextField
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
            variant="outlined"
            placeholder="E-mail"
            label="E-mail"
            className={style.login_text_field}
          />
          <div className={style.login_with_email_spacing}>
            {errors.email && (
              <span className={style.error__message}>
                {errors.email.message}
              </span>
            )}
          </div>
          <Button type="submit" label="Login" />
        </form>
      </Card>
    </Background>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    setUserEmail: (email: string) => dispatch(setUserEmailId(email)),
  };
};

export default connect(null, mapDispatchToProps)(LoginWithEmail);
