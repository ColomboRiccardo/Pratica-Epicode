import React, { useState } from "react";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//style imports
import "./AllTheBooks.style.css";

//data import
import bookStore from "../../assets/scifi.json";

//component imports
import SingleBook from "../SingleBook/SingleBook.component";

//utils imports
import {
  capitalize,
  allUpperCase,
} from "../../utils/utils";

const AllTheBooks = () => {
  const [bookList, setBookList] = useState(bookStore);
  const [idSelected, setIdSelected] = useState(0);

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
    <Container>
      <Row className="g-2">
        <Col>
          <h3>{allUpperCase("Lista dei libri")}</h3>
        </Col>

        <Col>
          <Form>
            <Row>
              <Col xs="9">
                <Form.Control
                  type="text"
                  placeholder="Cerca un libro"
                  onChange={(e) => handleChange(e)}
                />
              </Col>
              <Col xs="3">
                <Button type="submit">
                  {capitalize("cerca")}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row className="g-2">
        {bookList.map((book, index) => (
          <SingleBook
            book={book}
            id={index + 1}
            key={"book " + index}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

// input.addEventListener("input", (event) => {})
