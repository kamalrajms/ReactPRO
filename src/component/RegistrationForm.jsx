import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, seterror] = useState("");

  const handlechange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      seterror("All fields are required");
      return;
    }
    if (!formData.terms) {
      seterror("you must accept the terms");
      return;
    }
    seterror("");
    alert("your form is submitted");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Registration form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="name"
          value={formData.username}
          onChange={handlechange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handlechange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handlechange}
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handlechange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
