import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Protected({ setToken }) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await fetch(
      "http://localhost:3001/protected",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    localStorage.clear();
    setToken(null);
    navigate("/login");
  };
  return (
    <div>
      <h2>Protected Page</h2>
      <p>
        This is a protected page. Only authenticated users
        can see this.
      </p>
      {data && <p>{JSON.stringify(data)}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Protected;
