import React, { useState } from "react";

function CharacterCounter() {
  // State to store input text
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Number of characters: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
