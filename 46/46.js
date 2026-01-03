import { useState } from "react";

/* Child Component */
function CalculatorButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

/* Parent Component */
function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  function double() {
    setResult(number * 2);
  }

  function square() {
    setResult(number * number);
  }

  function cube() {
    setResult(number * number * number);
  }

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <br /><br />

      <CalculatorButton label="Double" onClick={double} />
      <CalculatorButton label="Square" onClick={square} />
      <CalculatorButton label="Cube" onClick={cube} />

      <p>Result: {result}</p>
    </div>
  );
}

export default App;
