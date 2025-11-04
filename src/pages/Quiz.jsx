import React, { useState } from "react";
import "../styles/quiz.scss";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
export default function Quiz() {
  const [correct, setCorrect] = useState(true);
  return (
    <>
      <div className="quiz-container">
        <div className="question-container">
          <h1 className="question-no">Question No : 01</h1>
          <h1 className="question-text">
            React is one of the most popular JavaScript libraries used in modern
            web development. It helps developers build user interfaces that
            update efficiently when data changes. Which of the following best
            describes the main purpose of React?
          </h1>
        </div>
        <div className="multiple-options">
          <div className="options">
            <span>To manage server-side databases and APIs </span>
            {correct ? (
              <span className="green">
                <IoCheckmarkSharp />
              </span>
            ) : (
              <span className="red">
                <IoCloseSharp />
              </span>
            )}
          </div>
          <div className="options">
            <span>
              To build dynamic, reusable, and interactive user interfaces
            </span>
            {correct ? (
              <span className="green">
                <IoCheckmarkSharp />
              </span>
            ) : (
              <span className="red">
                <IoCloseSharp />
              </span>
            )}
          </div>
          <div className="options">
            <span>To design complete operating systems </span>
            {correct ? (
              <span className="green">
                <IoCheckmarkSharp />
              </span>
            ) : (
              <span className="red">
                <IoCloseSharp />
              </span>
            )}
          </div>
          <div className="options">
            <span>To handle file storage and authentication </span>
            {correct ? (
              <span className="green">
                <IoCheckmarkSharp />
              </span>
            ) : (
              <span className="red">
                <IoCloseSharp />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
