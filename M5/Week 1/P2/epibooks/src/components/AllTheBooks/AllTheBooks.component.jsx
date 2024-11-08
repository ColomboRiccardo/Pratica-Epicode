import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//data import
import fantasyList from "../../books/fantasy.json";

//components import
import BookCard from "../BookCard/BookCard.component";

const AllTheBooks = () => {
  return (
    <div>
      <Container>
        <Row>
          {fantasyList.map((book, index) => {
            return (
              <BookCard
                title={book.title}
                image={book.img}
                bgColor="purple"
                col={4}
              />
            );
          })}
        </Row>
      </Container>
    </div>
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
