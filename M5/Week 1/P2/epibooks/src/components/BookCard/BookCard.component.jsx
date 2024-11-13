import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

//style imports
import "./BookCard.style.css";

const BookCard = ({ title, image, col }) => {
  //const { title, image, col, props } = props;
  return (
    <Col className="BookContainer" md={col}>
      <Card className="BookCard">
        <Card.Img variant="top" src={image} />
        <Card.Body className="CardBody">
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
