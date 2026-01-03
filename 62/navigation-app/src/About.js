import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Page</h2>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <p>This is the About page.</p>
    </div>
  );
}

export default About;
