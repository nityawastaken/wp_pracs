import React, { useState } from "react";

function DropdownExample() {
  // State to store selected option
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h2>Dropdown Example</h2>

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default DropdownExample;
