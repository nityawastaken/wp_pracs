import React from "react";

/* Child Component */
function Profile(props) {
    const style = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px"
    };

    return (
        <div style={style}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    );
}

/* Default Props */
Profile.defaultProps = {
    age: 18,
    city: "Unknown"
};

/* Parent Component */
function App() {
    return (
        <div>
            {/* Passing all props */}
            <Profile name="Rahul" age={21} city="Mumbai" />

            {/* Missing age and city → default props used */}
            <Profile name="Anita" />

            {/* Missing city only → default city used */}
            <Profile name="Amit" age={23} />
        </div>
    );
}

export default App;
