import React, { useState } from "react";

function LikeButton() {
  // State to store number of likes
  const [likes, setLikes] = useState(0);

  function increaseLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>Like Button</h2>

      <p>Likes: {likes}</p>

      <button onClick={increaseLikes}>
        Like
      </button>
    </div>
  );
}

export default LikeButton;
