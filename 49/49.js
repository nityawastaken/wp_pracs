import React, { useState } from "react";

function LiveInput() {
  // State to store input value
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Input Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;
