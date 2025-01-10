import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      setMessage("Login successful");
      navigate("/protected");
    } catch (error) {
      setMessage("Login failed");
    }

    // setToken("banana " + Date.now());
    // localStorage.setItem("token", "banana " + Date.now());
    // navigate("/protected");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
