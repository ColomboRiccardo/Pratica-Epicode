import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//context import
import { BookContext } from "../../Contexts/context";

//utils import
import { findBook } from "../../utils/utils";

const BookDetails = () => {
  let { bookList } = useContext(BookContext);
  let { asin } = useParams();
  let navigate = useNavigate();

  const currentBook = findBook(asin, bookList);

  //TODO does not redirect in case of page not found
  useEffect(() => {
    if (!currentBook) {
      navigate("/404");
    }
  }, [currentBook, navigate]);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col className="p-0">
          <Card>
            <Card.Img
              variant="top"
              src={currentBook?.img}
            />
          </Card>
        </Col>
        <Col>
          <h2>{currentBook?.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse volutpat
            condimentum tristique. Aenean est diam,
            porttitor ac nisl in, commodo sodales libero.
            Praesent fermentum, sapien sit amet faucibus
            rhoncus, elit leo tincidunt nibh, vel lobortis
            massa neque quis diam. Ut sed tortor sit amet
            sem interdum commodo. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Maecenas
            eleifend nibh eu tortor pretium, sed egestas
            turpis molestie. Maecenas velit turpis, cursus
            quis congue at, ullamcorper et felis. Sed quis
            mollis elit, et ornare justo. Nullam id vehicula
            turpis. Pellentesque aliquam sem ut imperdiet
            vehicula. In a turpis metus. Nullam eu dui mi.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
