import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardExample from "./MainContent";

function ContainerFluidExample() {
  return (
    <Container id="main-container" fluid>
      <Row>
        <Col>
          <CardExample />
        </Col>
        <Col>
          <CardExample />
        </Col>
        <Col>
          <CardExample />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;
