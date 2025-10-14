import React from "react";
import Third from "./Third";

export default function Second({ name }) {
  return (
    <div className="context">
      second component
      <Third name={name}/>
    </div>
  );
}
