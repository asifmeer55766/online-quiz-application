import React from "react";
import "../styles/buttons.scss";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../redux/counterSlice";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import api from "../pages/api.json";
import { useNavigate } from "react-router-dom";
export default function Buttons() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const lastQuestion = api.length;
  const totalQuestion = api.length;
  const incrementCount = () => {
    if (value < api.length) dispatch(incremented());
  };

  const decrementCount = () => {
    if (value > 1) dispatch(decremented());
  };

  const navigate = useNavigate();
  const SubmitForm = () => {
    navigate("/submitpage");
  };
  return (
    <>
      <section className="buttons-container">
        <div className="box-left">
          <div className="content-box">
            <p>
              <span>
                {value} of {totalQuestion}
              </span>{" "}
              Questions
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="btns">
            <button onClick={decrementCount}>
              <IoChevronBack /> Previous
            </button>
            <button onClick={incrementCount}>
              Next <IoChevronForward />
            </button>
            {lastQuestion === value ? (
              <div className="button-submit">
                <button onClick={SubmitForm}>Submit</button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
}
