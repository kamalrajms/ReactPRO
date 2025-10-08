import React from "react";
import Greeting from "./component/Greeting";
import ConditionalRendering from "./component/ConditionalRendering";
import UsestateHook from "./component/UsestateHook";

export default function App() {
  const name = "Sai Kumar";
  const age = 44;
  return (
    <div>
      <UsestateHook />
      <Greeting name={name} age={age} />
      <ConditionalRendering />
    </div>
  );
}
