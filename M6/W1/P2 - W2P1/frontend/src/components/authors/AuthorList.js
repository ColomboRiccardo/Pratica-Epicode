import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./AuthorList.css";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/authors"
      );
      const authors = await response.json();
      console.log("authors", authors);
      setAuthors(authors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <Container className="author-list">
      <Row>
        <h1>Authors</h1>
      </Row>
      <Row>
        {authors.map((author) => (
          <Col>
            <Link to={`/authors/${author._id}`}>
              <Card.Img src={author.avatar}></Card.Img>
              <Card key={author._id}>
                <Card.Title>
                  {author.nome} {author.cognome}
                </Card.Title>
                <Card.Body>{author.email}</Card.Body>
                <Card.Body>
                  {new Date(
                    author.data_di_nascita
                  ).toLocaleDateString()}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AuthorList;
