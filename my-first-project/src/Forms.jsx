import React, { useState } from "react";

const Forms = ({ onAdd }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Send data up to App.jsx
    onAdd({ email, password });

    // Clear form
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 p-5 bg-info-subtle  rounded-lg shadow-md"
    >
      <div className="mb-3">
        <label htmlFor="email" className="block fw-bold mb-1">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="form-control w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="block fw-bold mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control w-full border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="form-control bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 fw-bold"
      >
        Submit
      </button>
    </form>
  );
};

export default Forms;
