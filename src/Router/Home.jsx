import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);
  const page = useNavigate();

  useEffect(() => {
    if (count > 5) {
      page("/Services");
    }
  }, [count]);
  return (
    <div>
      Home component
      <button onClick={() => setCount(count + 1)}>
        Home to service {count}
      </button>
    </div>
  );
}
