import React from "react";

/* Child Component */
function CustomButton(props) {
    const buttonStyle = {
        padding: "10px 15px",
        margin: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        cursor: "pointer"
    };

    return (
        <button style={buttonStyle} onClick={props.onClick}>
            {props.label}
        </button>
    );
}

/* Parent Component */
function App() {
    return (
        <div>
            <CustomButton
                label="Button 1"
                onClick={() => console.log("Button 1 clicked")}
            />

            <CustomButton
                label="Button 2"
                onClick={() => console.log("Button 2 clicked")}
            />

            <CustomButton
                label="Button 3"
                onClick={() => console.log("Button 3 clicked")}
            />
        </div>
    );
}

export default App;
