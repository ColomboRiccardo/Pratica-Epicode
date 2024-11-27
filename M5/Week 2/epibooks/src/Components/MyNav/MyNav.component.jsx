import { useState, useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

//style imports
import "./MyNav.style.css";

//data import
import bookStore from "../../assets/scifi.json";

//context import
import {
  ThemeContext,
  BookContext,
} from "../../Contexts/context";

import { Link } from "react-router";

const MyNav = ({ toggleTheme }) => {
  const [checked, setChecked] = useState(false);

  const theme = useContext(ThemeContext);
  const { bookList, setBookList } = useContext(BookContext);

  const handleChange = (event) => {
    //console.log(event.target.value);
    const filterResult = bookStore.filter((book) =>
      book.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setBookList(filterResult);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme={theme}
    >
      <Container>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-2">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Browse</Nav.Link>
            <ButtonGroup>
              <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => {
                  toggleTheme();
                  setChecked(e.currentTarget.checked);
                }}
              >
                {checked ? "Light" : "Dark"}
              </ToggleButton>
            </ButtonGroup>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Cerca un libro"
              onChange={(event) => {
                handleChange(event);
              }}
            />

            <Button type="submit">Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
