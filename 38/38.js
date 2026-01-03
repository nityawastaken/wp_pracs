import React from "react";

/* Child Component */
function Card(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        padding: "15px",
        margin: "15px",
        width: "300px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
    };

    return (
        <div style={cardStyle}>
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <div>
                {props.children}
            </div>
        </div>
    );
}

/* Parent Component */
function App() {
    return (
        <div>
            <Card title="Card One" subtitle="Introduction">
                <p>This is the content of the first card.</p>
            </Card>

            <Card title="Card Two" subtitle="Details">
                <p>Second card has different content.</p>
                <button>Click Me</button>
            </Card>

            <Card title="Card Three" subtitle="Summary">
                <ul>
                    <li>Point One</li>
                    <li>Point Two</li>
                </ul>
            </Card>
        </div>
    );
}

export default App;
