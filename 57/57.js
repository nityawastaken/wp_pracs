import React, { useState } from "react";

function PasswordToggle() {
  // State to store password value
  const [password, setPassword] = useState("");

  // State to track visibility
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <h2>Password Show / Hide</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordToggle;
