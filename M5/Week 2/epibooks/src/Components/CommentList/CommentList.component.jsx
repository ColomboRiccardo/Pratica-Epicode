import React from "react";

import Card from "react-bootstrap/Card";

const CommentList = (props) => {
  const { comment, author, rate } = props.commentObj;
  return (
    <Card className="m-2">
      <Card.Header as="h6">{author}</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
        <Card.Text className="w-100 d-flex align-items-center justify-content-between small">
          <span className="me-auto d-block text-break">
            {comment}{" "}
          </span>
          <span className="fw-bold d-block p-2 bg-primary rounded">
            {rate + "/5"}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentList;

// {
//   "_id": "66c7590343a56800158ec487",
//   "comment": "ciao prof , aggiorno il commentokkk",
//   "rate": 1,
//   "elementId": "1940026091",
//   "author": "tghtr",
//   "createdAt": "2024-08-22T15:28:03.491Z",
//   "updatedAt": "2024-09-27T16:52:59.230Z",
//   "__v": 0
// }
