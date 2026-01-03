// npx create-react-app login-redirect
// cd login-redirect
// npm install react-router-dom
// then replace src/App.js with the following code
// npm start




import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

/* Login Component */
function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // assume login is successful
    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>

      <input type="text" placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

/* Dashboard Component */
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Login successful</p>
    </div>
  );
}

/* Main App */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
