import Container from "react-bootstrap/Container";

function ContainerFluidExample(props) {
  console.log(props);
  return (
    <Container className={props.className} id={props.id} fluid>
      {props.children}
    </Container>
  );
}

export default ContainerFluidExample;
