import React from "react";
import "../styles/submitpage.scss";
export default function SubmitPage() {
  return (
    <>
      <section className="submit-container">
        <h1>
          You have completed <span>10</span> / <span>15</span>
        </h1>
        <p>Enter your details and submit Quiz</p>
        <div className="student-form">
          <form action="">
            <div class="input-filed">
              <label htmlFor="name">Student Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="input-filed">
              <label htmlFor="rollno">Roll No </label>
              <input type="number" id="rollno" name="rollno" />
            </div>
            <div class="input-filed">
              <label htmlFor="class">Class</label>
              <input type="text" id="class" name="class" />
            </div>
            <div class="input-filed">
              <label htmlFor="section">Section</label>
              <input type="text" id="section" name="section" />
            </div>
            <button>Submit Now</button>
          </form>
          <p>
            Don’t forget to submit your quiz — otherwise, your grades won’t be
            saved!
          </p>
        </div>
      </section>
    </>
  );
}
