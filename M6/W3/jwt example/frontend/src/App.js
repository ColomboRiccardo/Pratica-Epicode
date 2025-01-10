import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import { jwtDecode } from "jwt-decode";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Public from "./components/Public";

function App() {
  const [token, setToken] = useState(null);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    setTokenValid(isAuthenticated());
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Router>
      <div>
        <h1>JWT Authentication Example</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/protected">Protected</a>
        </div>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} />}
          />
          <Route
            path="/protected"
            element={
              tokenValid ? (
                <Protected setToken={setToken} />
              ) : (
                <Denied />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// const checkToken = (token) => {
//   if (!token) {
//     return false;
//   }
//   const tokenArr = token.split(" ");

//   if (
//     tokenArr[0] === "banana" &&
//     Date.now() - tokenArr[1] < 10000
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // Check if the token is expired
    if (decoded.exp < currentTime) {
      return false;
    }

    // Check audience and issuer if needed
    if (
      decoded.aud !== "ourApp" ||
      decoded.iss !== "ourCompany"
    ) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

const Denied = () => {
  return (
    <div>
      <h2>Access Denied</h2>
      <p>Please log in to access this page.</p>
    </div>
  );
};

export default App;
