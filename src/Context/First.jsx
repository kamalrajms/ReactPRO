import React from "react";
import Second from "./Second";

export default function First({ name }) {
  return (
    <div className="context">
      Firt component
      <Second name={name} />
    </div>
  );
}
