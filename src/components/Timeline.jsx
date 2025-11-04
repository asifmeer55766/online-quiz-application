import React from "react";
import "../styles/timeline.scss";
export default function Timeline() {
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
            Time Remaining : <span>00:48</span>
          </p>
        </div>
      </section>
    </>
  );
}
