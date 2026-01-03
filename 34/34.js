import React from "react";

/* Child component */
function Product(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f9f9f9"
    };

    const statusStyle = {
        color: props.inStock ? "green" : "red",
        fontWeight: "bold"
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ color: "#333" }}>{props.name}</h3>
            <p>Price: ₹{props.price}</p>
            <p style={statusStyle}>
                {props.inStock ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}

/* Parent component */
function App() {
    return (
        <div>
            <Product name="Laptop" price="60000" inStock={true} />
            <Product name="Mobile" price="25000" inStock={false} />
            <Product name="Headphones" price="2000" inStock={true} />
            <Product name="Keyboard" price="1500" inStock={true} />
            <Product name="Mouse" price="800" inStock={false} />
        </div>
    );
}

export default App;
