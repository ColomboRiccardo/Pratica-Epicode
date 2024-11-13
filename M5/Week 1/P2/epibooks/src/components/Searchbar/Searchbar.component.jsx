import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//style import
import "./Searchbar.style.css";

const Searchbar = () => {
  return (
    <Form className="Searchbar">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="SearchLabel">
          Cerca i libri che vuoi
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Cerca un libro"
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Cerca
      </Button>
    </Form>
  );
};

export default Searchbar;
