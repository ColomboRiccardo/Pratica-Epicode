import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./AddComment.style.css";

//link imports
import {
  GET_COMMENT_URL,
  POST_COMMENT_URL,
  PUT_COMMENT_URL,
  API_KEY,
} from "../../utils/constants";

const AddComment = ({ asin, fetchData }) => {
  const postData = async () => {
    const response = await fetch(POST_COMMENT_URL, {
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        comment: comment,
        rate: rating,
        elementId: asin,
      }),
    });
    console.log(response);
  };

  /*
{
comment
rating
}
const [inputObj, setInputObj] = useState({});

*/

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
    setTimeout(() => fetchData(), 500);
    setComment("");
    setRating("");
  };

  return (
    <Card className="m-2 add-comment">
      <Card.Header as="h6">
        Aggiungi un commento
      </Card.Header>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Container>
          <Row className="my-1 g-1">
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Cosa ne pensi di questo libro?"
                onChange={(e) => handleCommentChange(e)}
                value={comment}
              />
            </Col>

            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Rating (1-5)"
                onChange={handleRatingChange}
                value={rating}
              />
            </Col>
            <Col sm={12}>
              <Button type="submit">
                Aggiungi Commento
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );
};

export default AddComment;
