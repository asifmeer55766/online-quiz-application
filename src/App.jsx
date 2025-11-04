import { useState } from "react";

import "./App.css";

import Quiz from "./pages/Quiz";
import Timeline from "./components/Timeline";
import Buttons from "./components/Buttons";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <>
      <Timeline />
      <Quiz />
      <Buttons />
      <SubmitPage />
    </>
  );
}

export default App;
