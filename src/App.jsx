import React from "react";
import Greeting from "./Greeting";
import Header from "./component/Header";
import Object from "./component/Object";
import Sub from "./component/subcom/Sub";

export default function App() {
  return (
    <>
      <Header />
      <h1 className="hello"> hello world</h1>
      <h2 style={{ padding: "100px", color: "yellow" }}>hello user</h2>
      <Greeting />
      <Sub />
      <Object />
    </>
  );
}
