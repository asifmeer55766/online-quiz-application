import React from "react";
import "../styles/timeline.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, decrementTime } from "../redux/timerSlice";
export default function Timeline() {
  const dispatch = useDispatch();
  const { timeLeft, isRunning } = useSelector((state) => state.timer);

  useEffect(() => {
    dispatch(startTimer());

    const timer = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <section className="timeline-container">
        <div class="box-left">
          <div class="content-box">
            <p>
              Remaining : <span>3</span>
            </p>
          </div>
          <div class="content-box">
            <p>
              Completed : <span>5</span>
            </p>
          </div>
        </div>
        <div class="content-box">
          <p>
            Time Remaining{" "}
            <span>
              {hours.toString().padStart(2, "0")} :{" "}
              {minutes.toString().padStart(2, "0")} :{" "}
              {seconds.toString().padStart(2, "0")}
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
