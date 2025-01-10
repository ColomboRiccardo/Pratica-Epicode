import React from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch(
      "http://localhost:3001/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 201) {
      navigate("/account");
    }
  };

  return (
    <div className="App">
      <h1>Se hai un account puoi fare sign in</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">Sign in</button>
      </form>
      <a href="/signup">Non hai un account? Registrati</a>
    </div>
  );
};

export default SignIn;
