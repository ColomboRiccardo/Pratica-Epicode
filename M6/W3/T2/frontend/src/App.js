import { Routes, Route } from "react-router";

import "./App.css";

import Homepage from "./views/Homepage.view";
import Account from "./views/Account.view";
import SignIn from "./views/SignIn.view";
import SignUp from "./views/Signup.view";
function App() {
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/account">Account</a>
        <a href="/signin">SignIn</a>
        <a href="/signup">SignUp</a>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
