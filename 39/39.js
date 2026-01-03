import React from "react";

/* Child Component */
function Task(props) {
    const taskStyle = {
        color: props.completed ? "green" : "red",
        fontWeight: "bold",
        margin: "8px"
    };

    return (
        <p style={taskStyle}>
            {props.taskName}
        </p>
    );
}

/* Parent Component */
function App() {
    return (
        <div>
            <h3>Task List</h3>

            <Task taskName="Complete Assignment" completed={true} />
            <Task taskName="Study React" completed={false} />
            <Task taskName="Practice Coding" completed={true} />
            <Task taskName="Submit Project" completed={false} />
        </div>
    );
}

export default App;
