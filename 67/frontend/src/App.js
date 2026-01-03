// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
