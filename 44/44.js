import React from "react";

/* Child Component */
function ImageCard(props) {
    const cardStyle = {
        border: "1px solid #ccc",
        width: "250px",
        margin: "10px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#f9f9f9"
    };

    const imgStyle = {
        width: "100%",
        height: "150px",
        objectFit: "cover"
    };

    return (
        <div style={cardStyle}>
            <img src={props.imageUrl} alt={props.title} style={imgStyle} />
            <div style={{ padding: "10px" }}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

/* Parent Component */
function App() {
    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Image Gallery</h2>

            <div style={containerStyle}>
                <ImageCard
                    imageUrl="https://via.placeholder.com/300"
                    title="Nature"
                    description="Beautiful nature scenery"
                />
                <ImageCard
                    imageUrl="https://via.placeholder.com/300"
                    title="City"
                    description="Modern city view"
                />
                <ImageCard
                    imageUrl="https://via.placeholder.com/300"
                    title="Mountains"
                    description="Snowy mountain range"
                />
                <ImageCard
                    imageUrl="https://via.placeholder.com/300"
                    title="Beach"
                    description="Relaxing beach scene"
                />
                <ImageCard
                    imageUrl="https://via.placeholder.com/300"
                    title="Forest"
                    description="Green forest landscape"
                />
            </div>
        </div>
    );
}

export default App;
