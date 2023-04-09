import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
