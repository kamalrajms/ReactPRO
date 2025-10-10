import React, { useState } from "react";

export default function InputFields() {
  const [name, setName] = useState("");

  const [isChecked, setIsChecked] = useState(true);

  return (
    <div>
      name
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>typed name :{name}</p>
      check box
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}
