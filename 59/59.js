import { useState } from "react";

function App() {
  const [age, setAge] = useState("");

  return (
    <div>
      <h2>Age Checker</h2>

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      {age !== "" && (
        age < 18 ? (
          <p>You are a minor</p>
        ) : (
          <p>You are an adult</p>
        )
      )}
    </div>
  );
}

export default App;
