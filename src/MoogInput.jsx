import React from "react";

export default function MoogInput({ mood, setMood, disable, handleGenerate }) {
  return (
    <div className="moodin">
      <h3>Mood Input</h3>
      <input
        placeholder="How are you feel like happy,Sad,bad"
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disable}
      />
      <button disabled={disable} onClick={handleGenerate}>
        Send
      </button>
    </div>
  );
}
