import React from "react";

export default function MoodOut({ subject, footer, handleReset }) {
  return (
    <div className="moodout">
      <h2>MoodOutput</h2>
      <textarea value={subject} readOnly></textarea>
      <input type="text" value={footer} readOnly />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
