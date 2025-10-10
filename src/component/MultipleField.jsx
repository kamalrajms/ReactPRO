import React, { useState } from "react";

export default function MultipleField() {
  const [formData, setFormData] = useState({
    name: "kamal",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h2>Multiple fields</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="age"
        onChange={handleChange}
      />
    </div>
  );
}
