import React, { useState } from "react";

function Rating() {
  // State to store current rating
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Star Rating</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray"
          }}
        >
          ★    
        </span>
      ))}

      <p>Rating: {rating}</p>
    </div>
  );
}

export default Rating;
