import { useContext } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

//component imports
import CommentArea from "../CommentArea/CommentArea.component";

//style imports
import "./SingleBook.style.css";

//context import
import { IdSelectedContext } from "../../Contexts/context";

const SingleBook = (props) => {
  const { idSelected, setIdSelected } = useContext(
    IdSelectedContext
  );

  const isSelected = () => {
    return idSelected === props.asin;
  };

  const handleClick = () => {
    if (isSelected()) {
      setIdSelected(1234567890);
    } else {
      setIdSelected(props.asin);
    }
  };

  //const { book } = props;
  return (
    <Col sm={4}>
      <Container className="Card-Container">
        <Row>
          <Col className="p-0">
            <Card
              className={`SingleBook ${
                isSelected() && "selected"
              }`}
              onClick={() => {
                handleClick();
              }}
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
        </Row>
      </Container>
    </Col>
  );
};

export default SingleBook;
