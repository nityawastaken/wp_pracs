import React, { useState } from "react";

function LiveInput() {
  // State to store input value
  const [text, setText] = useState("");

  function handlechange(e){
    setText(e.target.value);
  }



  return (
    <div>
      <h2>Live Input Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handlechange}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;
