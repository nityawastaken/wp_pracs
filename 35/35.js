import React from "react";

/* Child Component */
function Child(props) {
    const boxStyle = {
        border: "2px solid #4CAF50",
        padding: "15px",
        margin: "15px",
        width: "300px",
        backgroundColor: "#f9fff9"
    };

    return (
        <div style={boxStyle}>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Status: {props.isStudent ? "Student" : "Not a Student"}</p>
            <p>Subjects:</p>
            <ul>
                {props.subjects.map((sub, index) => (
                    <li key={index}>{sub}</li>
                ))}
            </ul>
        </div>
    );
}

/* Parent Component */
function App() {
    return (
        <div>
            <Child
                name="Rahul"
                age={20}
                isStudent={true}
                subjects={["Maths", "Physics", "Computer Science"]}
            />
        </div>
    );
}

export default App;
