import React, { useState } from "react";
import Button from "./Button";

export default function App() {
  const [xnext, setXnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (xnext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnext(!xnext);
  }
  return (
    <div className="game">
      <h2>X O Game</h2>
      <nav>
        <Button value={square[0]} onSquareclick={() => handleclick(0)} />
        <Button value={square[1]} onSquareclick={() => handleclick(1)} />
        <Button value={square[2]} onSquareclick={() => handleclick(2)} />
      </nav>
      <nav>
        <Button value={square[3]} onSquareclick={() => handleclick(3)} />
        <Button value={square[4]} onSquareclick={() => handleclick(4)} />
        <Button value={square[5]} onSquareclick={() => handleclick(5)} />
      </nav>
      <nav>
        <Button value={square[6]} onSquareclick={() => handleclick(6)} />
        <Button value={square[7]} onSquareclick={() => handleclick(7)} />
        <Button value={square[8]} onSquareclick={() => handleclick(8)} />
      </nav>
    </div>
  );
}
