import React, { useState } from "react";

/* MovieList Component */
function MovieList(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f9f9f9"
    };

    return (
        <div>
            <h2>Movie List</h2>
            {props.movies.map((movie, index) => (
                <div key={index} style={cardStyle}>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Year:</b> {movie.year}</p>
                    <p><b>Rating:</b> {movie.rating}</p>
                </div>
            ))}
        </div>
    );
}

/* CounterButton Component */
function CounterButton(props) {
    return (
        <button onClick={props.increment} style={{ padding: "8px", marginTop: "10px" }}>
            Increment Counter
        </button>
    );
}

/* ParentCounter Component */
function ParentCounter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter Example</h2>
            <p>Current Count: {count}</p>
            <CounterButton increment={increaseCount} />
        </div>
    );
}

/* Main App Component */
function App() {
    const movieData = [
        { title: "Inception", year: 2010, rating: 8.8 },
        { title: "Interstellar", year: 2014, rating: 8.6 },
        { title: "The Dark Knight", year: 2008, rating: 9.0 }
    ];

    return (
        <div>
            <MovieList movies={movieData} />
            <ParentCounter />
        </div>
    );
}

export default App;
