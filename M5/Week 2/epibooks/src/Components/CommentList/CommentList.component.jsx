import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CommentList = (props) => {
  const DEFAULTPROPS = {
    comment:
      "Ottimo libro, lo rileggerei subito, ma non lo ho ancora letto",
    rate: "4",
    elementId: "0000",
  };

  const {
    comment = DEFAULTPROPS.comment,
    rate = DEFAULTPROPS.rate,
    elementId = DEFAULTPROPS.elementId,
  } = props;
  return (
    <Card className="m-2">
      <Card.Header as="h5">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
        <Card.Title>{elementId} - Carla Maria</Card.Title>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentList;
