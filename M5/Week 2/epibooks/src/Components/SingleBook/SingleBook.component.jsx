import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  //const { book } = props;
  return (
    <>
      <style>
        {`.SingleBook img{
            height: 500px;
            object-fit: cover;
            }
        .card-body{
            height: 80px;
            display: flex;
            align-items: center;
        }
        
        `}
      </style>
      <Col sm={3}>
        <Card className="SingleBook">
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Text>{props.book.title}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
