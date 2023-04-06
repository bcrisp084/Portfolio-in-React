import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardExample from "./Card";
import Image from "./Image";

function ContainerFluidExample(props) {
  return (
    <Container id="main-container" fluid>
      {props.children}
    </Container>
  );
}

export default ContainerFluidExample;
