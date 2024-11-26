import React, { useContext } from "react";

//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//style imports
import "./AllTheBooks.style.css";

//component imports
import SingleBook from "../SingleBook/SingleBook.component";

//utils imports
import {
  capitalize,
  allUpperCase,
} from "../../utils/utils";

//context import
import {
  ThemeContext,
  BookContext,
  IdSelectedContext,
} from "../../Contexts/context";
import CommentArea from "../CommentArea/CommentArea.component";

const AllTheBooks = () => {
  const theme = useContext(ThemeContext);
  const { bookList } = useContext(BookContext);
  const { idSelected, setIdSelected } = useContext(
    IdSelectedContext
  );

  return (
    <Container data-bs-theme={theme}>
      <Row className="g-2">
        <Col>
          <h3>{allUpperCase("Lista dei libri")}</h3>
        </Col>
      </Row>

      <Row className="g-2">
        <Col sm={9}>
          <Row className="g-2">
            {bookList.map(({ asin, ...book }) => (
              <SingleBook
                book={book}
                asin={asin}
                key={asin}
              />
            ))}
          </Row>
        </Col>
        <Col sm={3}>
          <Container className="h-100" fluid>
            <Row
              className="sticky-top"
              style={{ top: "12px" }}
            >
              <CommentArea asin={idSelected} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;

// input.addEventListener("input", (event) => {})

// {
//   "asin": "1597808709",
//   "title": "A Second Chance: The Chronicles of St. Mary's Book Three",
//   "img": "https://images-na.ssl-images-amazon.com/images/I/714wSBJshRL.jpg",
//   "price": 9.86,
//   "category": "romance"
// },

// {bookList.map((book) => (
//   <SingleBook book={book} asin={book.asin} key={book.asin} />
// ))}
