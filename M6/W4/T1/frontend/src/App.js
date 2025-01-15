import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.component";
import Homepage from "./views/Homepage.view";
import Login from "./views/Login.view";
import Account from "./views/Account.view";
import { useAuth } from "@clerk/clerk-react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState(null);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    console.log(jwt, "funziona");
    if (!jwt && !!localStorage.getItem("token")) {
      setJwt(localStorage.getItem("token"));
    } else if (!!jwt) {
      localStorage.setItem("token", jwt);
    }
  }, [jwt]);

  useEffect(() => {
    if (isSignedIn) {
      setIsLoggedIn(isSignedIn);
    }
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", true);
    } else {
      localStorage.setItem("isLoggedIn", false);
    }
  }, [isSignedIn, isLoggedIn]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/account"
          element={
            isLoggedIn ? (
              <Account setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <h1>Non sei loggato</h1>
            )
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setJwt={setJwt}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
