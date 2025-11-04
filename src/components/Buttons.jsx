import React from "react";
import "../styles/buttons.scss";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

export default function Buttons() {
  return (
    <>
      <section className="buttons-container">
        <div class="box-left">
          <div class="content-box">
            <p>
              <span>1 of 5 </span>Questions
            </p>
          </div>
        </div>
        <div class="content-box">
          <div class="btns">
            <button>
              <IoChevronBack /> Previous
            </button>
            <button>
              Next <IoChevronForward />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
