import React from "react";
import "../styles/submitpage.scss";
import { useSelector } from "react-redux";
import api from "../pages/api.json";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
export default function SubmitPage() {
  const userAnswers = useSelector((state) => state.answers.userAnswers);

  const totalQuestions = api.length;

  const score = api.reduce((acc, q) => {
    const userAns = userAnswers[q.id];
    if (userAns === q.answer) return acc + 1;
    return acc;
  }, 0);

  return (
    <>
      <section className="submit-container">
        <h1>
          Quiz Summery <span>{score}</span> / <span>{totalQuestions}</span>
        </h1>

        <div class="table-wrapper">
          {" "}
          <table>
            <thead>
              <tr>
                <th>Sr.No </th>
                <th>Your Answers</th>

                <th>Remarks </th>
              </tr>
            </thead>
            <tbody>
              {api.map((q) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.answer;
                return (
                  <tr>
                    <td>{q.id}</td>
                    <td>{userAns}</td>

                    <td>
                      {isCorrect ? (
                        <FaCheck className="success" />
                      ) : (
                        <FaExclamationTriangle className="fail" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p>Enter your details and submit quiz</p>

        <div className="student-form">
          <form>
            <div className="input-filed">
              <label>Student Name</label>
              <input type="text" />
            </div>
            <div className="input-filed">
              <label>Roll No</label>
              <input type="number" />
            </div>
            <div className="input-filed">
              <label>Class</label>
              <input type="text" />
            </div>
            <div className="input-filed">
              <label>Section</label>
              <input type="text" />
            </div>
            <button>Submit Now</button>
          </form>
        </div>
      </section>
    </>
  );
}
