import { useRouter } from "next/router";
import React from "react";
import Countdown from "react-countdown";
import style from "./CountDownTimer.module.css";

interface ITimerCount {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

function CountDownTimer() {
  const router = useRouter();
  const renderer = ({ hours, minutes, seconds, completed }: ITimerCount) => {
    if (completed) {
      router.push("/report");
    } else {
      return (
        <div className={style.count_down_timer_container}>
          <strong>Remaining Time:- {hours} H: {minutes} MIN: {seconds} SEC</strong>
        </div>
      );
    }
  };
  return <Countdown date={Date.now() + 1800000} renderer={renderer} />;
}

export default CountDownTimer;
