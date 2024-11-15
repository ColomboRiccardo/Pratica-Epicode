import { useState } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

//component imports
import CommentArea from "../CommentArea/CommentArea.component";

//style imports
import "./SingleBook.style.css";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  //const { book } = props;
  return (
    <Col sm={selected ? 6 : 3}>
      <Container className="Card-Container">
        <Row>
          <Col className="p-0">
            <Card
              className={`SingleBook ${
                selected ? "selected" : ""
              }`}
              onClick={() => setSelected(!selected)}
            >
              <Card.Img
                variant="top"
                src={props.book.img}
              />
              <Card.Body>
                <Card.Text>{props.book.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className={`${selected ? "" : "d-none"} p-0`}
          >
            {selected && <CommentArea />}
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default SingleBook;
