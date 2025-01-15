import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

const Account = ({ setIsLoggedIn }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    signOut();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>Benvenuto nella tua area riservata</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
