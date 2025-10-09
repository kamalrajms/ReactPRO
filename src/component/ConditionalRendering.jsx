import React, { useState } from "react";

export default function ConditionalRendering() {
  const [user, setUser] = useState(false);
  console.log(user);

  return (
    <div>
      {user ? <p>Welcome back</p> : <p>Please login...</p>}

      {user && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          libero quaerat enim quod distinctio magni maiores, officiis in nostrum
          laborum.
        </p>
      )}
      <button onClick={() => setUser(!user)}>
        {user ? "sign out" : "Sign in"}
      </button>
    </div>
  );
}
