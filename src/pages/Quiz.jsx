import React, { useState, useEffect } from "react";
import "../styles/quiz.scss";
import api from "./api.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Timeline from "../components/Timeline";
import Buttons from "../components/Buttons";
import { saveAnswer, resetAnswers } from "../redux/answersSlice";

export default function Quiz() {
  const dispatch = useDispatch();
  const { timeLeft } = useSelector((state) => state.timer);
  const value = useSelector((state) => state.counter.value);
  const userAnswers = useSelector((state) => state.answers.userAnswers);

  const currentIndex = value - 1;
  const currentQuestion = api[currentIndex];
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(
    userAnswers[currentQuestion?.id] || null
  );
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (timeLeft === 0) navigate("/submitpage");
  }, [timeLeft]);
  useEffect(() => {
    // Reset previous quiz answers when starting from Q1
    if (currentQuestion.id === 1) {
      dispatch(resetAnswers());
    }

    // Ensure selected option is clean
    setSelectedOption(null);
  }, [currentQuestion.id]);

  if (!currentQuestion) return <h1>No more questions</h1>;

  const handleSelect = (option) => {
    if (isDisabled) return; // prevent reattempt
    if (selectedOption) return; // disable re-selection

    setSelectedOption(option);
    dispatch(
      saveAnswer({
        questionId: currentQuestion.id,
        selectedOption: option,
      })
    );
    setIsDisabled(true);
  };
  useEffect(() => {
    const savedAnswer = userAnswers[currentQuestion.id];

    if (savedAnswer) {
      setSelectedOption(savedAnswer); // highlight old answer
      setIsDisabled(true); // disable reattempt
    } else {
      setSelectedOption(null); // no selection
      setIsDisabled(false); // allow attempt
    }
  }, [currentQuestion.id, userAnswers]);
  return (
    <>
      <Timeline />
      <div className="quiz-container">
        <div className="question-container">
          <h1 className="question-no">Question No: {currentQuestion.id}</h1>
          <h1 className="question-text">{currentQuestion.question}</h1>
        </div>
        <div className="multiple-options">
          {currentQuestion.options.map((option, i) => (
            <div
              key={i}
              className={`options ${
                selectedOption === option ? "selected" : ""
              } ${isDisabled ? "disabled" : ""}`}
              onClick={() => !isDisabled && handleSelect(option)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>

      <Buttons disableNext={!selectedOption} />
    </>
  );
}
