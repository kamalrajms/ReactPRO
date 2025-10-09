import React from "react";

export default function ListRendering() {
  const fruits = ["Apple", "banana", "Mango", "gbrieug", "uefewy"];

  const users = [
    // { id: 1, name: "raj" },
    // { id: 2, name: "kumar" },
    // { id: 3, name: "sai kumar" },
    // { id: 4, name: "sai kumar" },
  ];
  console.log(users.length);
  console.log(users.length);

  return (
    <div>
      <h2>fruits table</h2>
      <ul>
        {fruits.map((names, ind) => (
          <li key={ind}>{names}</li>
        ))}
      </ul>
      <h2>user data</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>no data fount in user data</p>
      )}
    </div>
  );
}
