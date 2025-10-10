import React, { useState } from "react";
import Greeting from "./component/Greeting";
import ConditionalRendering from "./component/ConditionalRendering";
import UsestateHook from "./component/UsestateHook";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";
import InputFields from "./component/InputFields";
import MultipleField from "./component/MultipleField";
import RegistrationForm from "./component/RegistrationForm";

export default function App() {
  const name = "Sai Kumar";
  const age = 44;
  const [user, setUser] = useState(true);
  return (
    <div>
      <RegistrationForm />
      <MultipleField />
      <InputFields />
      <Dark />
      {user ? <ListRendering /> : <ConditionalRendering />}
      <button onClick={() => setUser(!user)}>user</button>

      <UsestateHook />
      <Greeting name={name} age={age} />
    </div>
  );
}
