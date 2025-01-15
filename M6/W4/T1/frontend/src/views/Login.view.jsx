import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setIsLoggedIn, setJwt }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

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
    if (response.status === 200) {
      setIsLoggedIn(data.isLoggedIn);
      setJwt(data.token);
      navigate("/account");
    }
  };

  return (
    <div>
      <h1>Fai login</h1>
      <form className="login-form">
        <label htmlFor="username">
          Inserisci il tuo username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />
        <label htmlFor="password">
          Inserisci una nuova password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
