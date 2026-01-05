import React, { useState } from "react";

function SignupForm() {
  // State for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation functions (run in real time)
  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);

    if (value === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div>
      <h2>Signup Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <p style={{ color: "red" }}>{nameError}</p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <p style={{ color: "red" }}>{emailError}</p>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <p style={{ color: "red" }}>{passwordError}</p>

      <button>Signup</button>
    </div>
  );
}

export default SignupForm;
