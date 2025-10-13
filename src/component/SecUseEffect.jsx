import React, { useState, useEffect } from "react";

export default function SecUseEffect() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>seconds: {sec}</div>;
}
