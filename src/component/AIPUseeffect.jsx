import React, { useState, useEffect } from "react";

export default function AIPUseeffect() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h3>User data</h3>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {users.map((person) => (
            <li key={person.id}>
              name:{person.name}--email:{person.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
