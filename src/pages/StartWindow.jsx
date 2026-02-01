import react from "react";
import "../styles/startwindow.scss";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, decrementTime } from "../redux/timerSlice";
import { useNavigate } from "react-router-dom";
import api from "../pages/api.json";
export default function StartWindow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuestions = api.length;
  const timelimit = totalQuestions * 1;

  const startQuiz = () => {
    navigate("/quiz");
    dispatch(startTimer);
  };
  return (
    <>
      <div className="start-window">
        <div className="titles">
          <h2>
            Total question <span>{totalQuestions}</span>
          </h2>
          <h2>
            Total time <span>{timelimit} minutes</span>
          </h2>
        </div>
        <div className="instructions">
          <p>
            {" "}
            <span>Note :</span> please attempt each question carefully, once you
            choose the option and forward next question you can not re attempt
            previous question. finish all question before the time ends up ,
            once finish all question , fill your bio data on form and submit the
            form . keep in mind do not forget to submit the quiz , otherwise
            your grads will consider zero marks .
          </p>
        </div>
        <div className="start-buttons">
          <button onClick={startQuiz}>Start the Quiz</button>
        </div>
      </div>
    </>
  );
}
