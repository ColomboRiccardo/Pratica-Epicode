import React from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Benvenuti in EpiBooks</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="danger">
            Non ti sei ancora registrato al nostro servizio
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
