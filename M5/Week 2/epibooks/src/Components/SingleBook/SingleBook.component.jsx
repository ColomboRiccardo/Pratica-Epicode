import { useContext } from "react";
import { Link } from "react-router";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

//style imports
import "./SingleBook.style.css";

//context import
import { AsinSelectedContext } from "../../Contexts/context";

const SingleBook = (props) => {
  const { asinSelected, setAsinSelected } = useContext(
    AsinSelectedContext
  );

  const handleClick = () => {
    if (asinSelected === props.asin) {
      setAsinSelected(null);
    } else {
      setAsinSelected(props.asin);
    }
  };

  //const { book } = props;
  return (
    <Col sm={4}>
      <Container
        className="Card-Container"
        data-testid="SingleBook"
      >
        <Row>
          <Col className="p-0">
            <Card
              className={`SingleBook ${
                asinSelected === props.asin && "selected"
              }`}
              onClick={() => {
                handleClick();
              }}
            >
              <Card.Img
                variant="top"
                src={props.book.img}
              />
              <Button info className="card-button">
                <Link to={`/book/${props.asin}`}>
                  Vai al libro
                </Link>
              </Button>
              <Card.Body>
                <Card.Text>{props.book.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default SingleBook;
