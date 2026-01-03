import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <p>Welcome to the Home page.</p>
    </div>
  );
}

export default Home;
