import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Searchbar from "../Searchbar/Searchbar.component";

const MyNav = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">EpiBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          {/* <Searchbar className="justify-content-end" /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
