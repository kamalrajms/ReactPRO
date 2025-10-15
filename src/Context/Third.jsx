import React, { useContext } from "react";

import { Pass } from "../App";

export default function Third() {
  const passName = useContext(Pass);
  return (
    <div className="context">
      <p>Third component {passName}</p>
    </div>
  );
}
