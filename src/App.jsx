import React, { useState } from "react";
import Greeting from "./component/Greeting";
import ConditionalRendering from "./component/ConditionalRendering";
import UsestateHook from "./component/UsestateHook";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";

export default function App() {
  const name = "Sai Kumar";
  const age = 44;
  const [user, setUser] = useState(true);
  return (
    <div>
      <Dark />
      {user ? <ListRendering /> : <ConditionalRendering />}
      <button onClick={() => setUser(!user)}>user</button>

      <UsestateHook />
      <Greeting name={name} age={age} />
    </div>
  );
}
