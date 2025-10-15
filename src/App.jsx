import React, { useState, useContext, createContext } from "react";
import Greeting from "./component/Greeting";
import ConditionalRendering from "./component/ConditionalRendering";
import UsestateHook from "./component/UsestateHook";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";
import InputFields from "./component/InputFields";
import MultipleField from "./component/MultipleField";
import RegistrationForm from "./component/RegistrationForm";
import UseEffectHook from "./component/UseEffectHook";
import SecUseEffect from "./component/SecUseEffect";
import AIPUseeffect from "./component/AIPUseeffect";
import Time from "./component/Time";
import UseRef from "./component/UseRef";
import First from "./Context/First";
import UseReducerHook from "./component/UseReducerHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Services from "./Router/Services";
import Contact from "./Router/Contact";

export const Pass = createContext();

export default function App() {
  const name = "Sai Kumar";
  const age = 44;
  const [user, setUser] = useState(true);
  const display = false;
  return (
    <div>
      {display && (
        <div>
          <UseReducerHook />
          <div className="context">
            App component
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
          <UseRef />
          <Time />
          <AIPUseeffect />
          <SecUseEffect />
          <UseEffectHook />
          <RegistrationForm />
          <MultipleField />
          <InputFields />
          <Dark />
          {user ? <ListRendering /> : <ConditionalRendering />}
          <button onClick={() => setUser(!user)}>user</button>

          <UsestateHook />
          <Greeting name={name} age={age} />
        </div>
      )}
      <BrowserRouter>
        <div className="menu">
          <Link to={""}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Services"}>Services</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
