import Row from "react-bootstrap/Row";

function RowExample(props) {
  return (
    <Row id={props.id} className={props.className}>
      {props.children}
    </Row>
  );
}

export default RowExample;
