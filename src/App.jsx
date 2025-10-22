import React, { useState } from "react";
import MoogInput from "./MoogInput";
import MoodOut from "./MoodOut";

export default function App() {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generator, setGenerator] = useState(false);

  const handleGenerate = () => {
    const lower = mood.toLocaleLowerCase();

    if (lower.includes("happy")) {
      setSubject("i feel very happy");
      setFooter("happy");
    } else if (lower.includes("sad")) {
      setSubject("i feel very not happy");
      setFooter("sad");
    } else {
      setSubject("enter meaning data");
      setFooter("i am not understand");
    }
    setGenerator(true);
  };
  const handleReset = () => {
    setFooter("");
    setMood("");
    setSubject("");
    setGenerator(false);
  };
  return (
    <div className="mail">
      <h2>Mood mail Generator</h2>
      {!generator ? (
        <MoogInput
          mood={mood}
          setMood={setMood}
          disable={generator}
          handleGenerate={handleGenerate}
        />
      ) : (
        <MoodOut subject={subject} footer={footer} handleReset={handleReset} />
      )}
    </div>
  );
}
