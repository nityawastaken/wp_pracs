import React from "react";

/* Child component */
function Greeting(props) {
    return (
        <h3>Hello, {props.name}! Welcome to React.</h3>
    );
}

/* Parent component */
function App() {
    const names = ["Alice", "Bob", "Charlie"];

    return (
        <div>
            {names.map((name, index) => (
                <Greeting key={index} name={name} />
            ))}
        </div>
    );
}

export default App;
