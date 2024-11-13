import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//data import
import fantasyList from "../../books/fantasy.json";

//components import
import BookCard from "../BookCard/BookCard.component";
import "../Searchbar/Searchbar.style.css";

const AllTheBooks = () => {
  const [bookList, setBookList] = useState(fantasyList);

  const searchBooks = (searchValue) => {
    //setBookList(fantasyList);
    const filteredList = fantasyList.filter((book) =>
      book.title.includes(searchValue)
    );
    setBookList(filteredList);
  };

  // useEffect(() => {
  //   console.log(bookList);
  // }, [bookList]);

  return (
    <div>
      <Container>
        <Searchbar searchBooks={searchBooks} />
        <Row className="g-3">
          {bookList.map((book, index) => {
            return (
              <BookCard
                key={"book " + index}
                title={book.title}
                image={book.img}
                col={3}
                props={1}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

const Searchbar = ({ searchBooks }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchValue);
    searchBooks(searchValue);
  };

  const handleChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Form
      className="Searchbar"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="SearchLabel">
          Cerca i libri che vuoi
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Cerca un libro"
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Cerca
      </Button>
    </Form>
  );
};

export default AllTheBooks;

/*
fantasyList.forEach(elemento => renderList(elemento))

function renderList(elemento){
const container  = document.getElementById("container")

const li = document.createElement("li")
li.innerText = elemento
container.appendchild(li)
}
*/
