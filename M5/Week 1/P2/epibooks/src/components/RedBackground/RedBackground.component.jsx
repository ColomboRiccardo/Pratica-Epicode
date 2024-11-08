import React from "react";

const RedBackground = ({ children }) => {
  return (
    <>
      <style>
        {`
        .RedBackground{
            background-color: red
        }
        `}
      </style>
      <div className="RedBackground">{children}</div>
    </>
  );
};

export default RedBackground;
