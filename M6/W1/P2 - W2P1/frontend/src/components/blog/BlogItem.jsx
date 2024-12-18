import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";
const BlogItem = (props) => {
  const { title, cover, author, _id } = props;
  return (
    <Link to={`/blog/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img
          variant="top"
          src={cover}
          className="blog-cover"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={"auto"} className="pe-0">
              <Image
                className="blog-author"
                src={author.avatar}
                roundedCircle
              />
            </Col>
            <Col>
              <div>di</div>
              <h6>{author.name}</h6>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default BlogItem;
