import React, { useRef } from "react";

export default function UseRef() {
  const inpuRef = useRef();

  const focusInput = () => {
    inpuRef.current.focus();
  };
  return (
    <div>
      <input ref={inpuRef} type="text" placeholder="enter name" />
      <button onClick={focusInput}>focus input</button>
    </div>
  );
}
