import React, { useState } from "react";

function StepCounter() {
  // State for count
  const [count, setCount] = useState(0);

  // State for step value
  const [step, setStep] = useState(1);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  return (
    <div>
      <h2>Step Counter</h2>

      <label>
        Enter step value:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </label>

      <p>Current Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StepCounter;
