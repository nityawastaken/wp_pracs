import React from "react";

/* Child Component */
function Message(props) {
    let style = {
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        fontWeight: "bold"
    };

    if (props.type === "success") {
        style.backgroundColor = "#d4edda";
        style.color = "#155724";
    } else if (props.type === "error") {
        style.backgroundColor = "#f8d7da";
        style.color = "#721c24";
    } else if (props.type === "info") {
        style.backgroundColor = "#d1ecf1";
        style.color = "#0c5460";
    }

    return <div style={style}>{props.text}</div>;
}

/* Parent Component */
function App() {
    return (
        <div>
            <h3>Messages</h3>

            <Message
                text="Operation completed successfully"
                type="success"
            />

            <Message
                text="Something went wrong"
                type="error"
            />

            <Message
                text="Please check your email for updates"
                type="info"
            />
        </div>
    );
}

export default App;
