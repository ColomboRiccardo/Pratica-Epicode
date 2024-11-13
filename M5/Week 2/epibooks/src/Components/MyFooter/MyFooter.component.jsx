import React from "react";
import Container from "react-bootstrap/Container";

//style imports
import "./MyFooter.style.css";

const MyFooter = () => {
  return (
    <footer
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container expand="lg" className="">
        EpiBook copyright 2024 @ something
      </Container>
    </footer>
  );
};

export default MyFooter;
