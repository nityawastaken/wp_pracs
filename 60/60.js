import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

/* Home Page */
function Home() {
  return <h2>Home Page</h2>;
}

/* About Page */
function About() {
  return <h2>About Page</h2>;
}

/* Contact Page */
function Contact() {
  return <h2>Contact Page</h2>;
}

/* Main App */
function App() {
  return (
    <BrowserRouter>

      <nav>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            marginRight: 10,
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            marginRight: 10,
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
