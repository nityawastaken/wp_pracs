import React, { useState } from "react";

function ShowHideText() {
  // State to track visibility
  const [isVisible, setIsVisible] = useState(false);

  function toggleText() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <h2>Show / Hide Example</h2>

      <button onClick={toggleText}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>This text can be shown or hidden.</p>}
    </div>
  );
}

export default ShowHideText;
