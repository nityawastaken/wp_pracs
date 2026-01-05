import React, { useState } from "react";

function SimpleForm() {
  // State to store form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function runs on form submit
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    alert("Name: " + name + "\nEmail: " + email);
  }

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
