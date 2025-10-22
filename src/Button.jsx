import React from "react";

export default function Button({ value, onSquareclick }) {
  return (
    <div>
      <button className="box" onClick={onSquareclick}>
        {value}
      </button>
    </div>
  );
}
