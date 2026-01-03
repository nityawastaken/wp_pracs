import React from "react";

/* Child component */
function StudentCard(props) {
    const cardStyle = {
        border: "1px solid #e36767ff",
        padding: "15px",
        margin: "10px",
        width: "250px",
        borderRadius: "8px",
        backgroundColor: "#453bceff"
    };

    return (
        <div style={cardStyle}>
            <h3>{props.name}</h3>
            <p>Roll Number: {props.rollNumber}</p>
            <p>Marks: {props.marks}</p>
        </div>
    );
}

/* Parent component */
function App() {
    return (
        <div>
            <StudentCard name="Alice" rollNumber="101" marks="85" />
            <StudentCard name="Bob" rollNumber="102" marks="90" />
            <StudentCard name="Charlie" rollNumber="103" marks="78" />
        </div>
    );
}

export default App;
