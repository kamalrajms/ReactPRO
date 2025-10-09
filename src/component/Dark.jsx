import React, { useState } from "react";

export default function Dark() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        switch to {darkMode ? "light mode" : "dark mode"}{" "}
      </button>
      <p>you are in {darkMode ? "Dark" : "light"} mode</p>
    </div>
  );
}
