import React from "react";

/* Child Component */
function Category(props) {
    const boxStyle = {
        border: "1px solid #ccc",
        padding: "12px",
        margin: "12px",
        width: "300px",
        backgroundColor: "#f9f9f9"
    };

    return (
        <div style={boxStyle}>
            <h3>{props.name}</h3>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

/* Parent Component */
function App() {
    return (
        <div>
            <Category
                name="Fruits"
                items={["Apple", "Banana", "Mango"]}
            />

            <Category
                name="Sports"
                items={["Cricket", "Football", "Tennis"]}
            />

            <Category
                name="Programming Languages"
                items={["C", "Java", "JavaScript"]}
            />
        </div>
    );
}

export default App;
