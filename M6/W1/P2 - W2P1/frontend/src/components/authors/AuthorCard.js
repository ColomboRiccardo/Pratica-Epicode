import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Image } from "react-bootstrap";
import "./AuthorList.css";

const AuthorCard = () => {
  let params = useParams();

  const [author, setAuthor] = useState();
  const [error, setError] = useState();

  const fetchAuthors = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/authors/" + params.id
      );
      if (response.status === 404) {
        setError(404);
      }
      const author = await response.json();

      setAuthor(author[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthors();
    console.log(author);
  }, []);

  return (
    <Container className="author-list">
      {error === 404 && <h3>Nessun utente trovato</h3>}
      {author && (
        <>
          <Row>
            {author.nome} {author.cognome}
          </Row>
          <Row>
            <Image
              className="image-author"
              src={author.avatar}
              thumbnail
              alt="bello figo"
            />
          </Row>
          <Row>{author.email}</Row>
        </>
      )}
    </Container>
  );
};

export default AuthorCard;
