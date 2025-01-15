import React from "react";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-ul">
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
        <SignedOut>
          <p>Questo contenuto è pubblico</p>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <p>Questo contenuto è segreto</p>
          <UserButton />
        </SignedIn>
      </ul>
    </nav>
  );
};

export default Navbar;
