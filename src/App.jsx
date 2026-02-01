import { useState } from "react";

import "./App.css";

import Quiz from "./pages/Quiz";
import Timeline from "./components/Timeline";
import Buttons from "./components/Buttons";
import SubmitPage from "./pages/SubmitPage";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartWindow from "./pages/StartWindow";

function App() {
  const { timeLeft, isRunning } = useSelector((state) => state.timer);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartWindow />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="submitpage" element={<SubmitPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
