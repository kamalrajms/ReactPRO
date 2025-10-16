import React, { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      About Component
      {user.map((user) => (
        <li key={user.id}>
          <Link to={`/Blogs/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
}
