import React from "react";

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch(
      "http://localhost:3001/signup",
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
  };

  return (
    <div className="App">
      <h1>Se non hai un account puoi fare sign up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
        <button type="submit">Sign up</button>
      </form>
      <a href="/signin">Hai un account?</a>
    </div>
  );
};

export default SignUp;
