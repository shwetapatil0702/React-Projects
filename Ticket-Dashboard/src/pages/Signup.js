import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSignup}>
        <h2>Signup</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>

        <p>Already have an account?</p>
        <button type="button" onClick={() => navigate("/login")}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;