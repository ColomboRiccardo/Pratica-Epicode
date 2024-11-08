import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

//style imports
import "./BookCard.style.css";

const BookCard = (props) => {
  const { title, image, bgColor, col } = props;
  return (
    <>
      <style>{`
        .BookCard{
        background-color:${bgColor}
        }
        `}</style>
      <Col md={col}>
        <Card className="BookCard">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default BookCard;
