import React from "react";

export default function ConditionalRendering() {
  const user = false;
  return <div>{user ? <p>Welcome back</p> : <p>Please login...</p>}</div>;
}
