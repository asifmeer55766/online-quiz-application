import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import "../styles/gamebox.scss";

export default function GameBox() {
  const [pairs, setPairs] = useState([]);

  const handleGenerate = () => {
    const randomPairs = generateRandomPairs(8, 8, 3);
    setPairs(randomPairs);
  };

  const rows = 8;
  const cols = 8;
  return (
    <>
      <div class="gamebox-container">
        <div class="best-score">
          <span>
            <FcApproval />
          </span>
          <h2>00000</h2>
        </div>
        <div class="score">
          <h1>00000</h1>
        </div>
        <div className="game-field">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="box-group" key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => (
                <div
                  className="box"
                  key={colIndex}
                  data-row={rowIndex + 1}
                  data-col={colIndex + 1}
                ></div>
              ))}
            </div>
          ))}
        </div>

        <div class="suggestion-field">
          <div>
            <button onClick={handleGenerate}>Generate Random Pairs</button>
            <ul>
              {pairs.map((p, i) => (
                <li key={i}>
                  Row {p.row}, Col {p.col}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
function generateRandomPairs(rows = 8, cols = 8, pairCount = 3) {
  const pairs = new Set();
  while (pairs.size < pairCount) {
    const row = Math.floor(Math.random() * rows) + 1;
    const col = Math.floor(Math.random() * cols) + 1;
    const pairKey = `${row},${col}`;
    pairs.add(pairKey);
  }
  return Array.from(pairs).map((pair) => {
    const [r, c] = pair.split(",").map(Number);
    return { row: r, col: c };
  });
}
