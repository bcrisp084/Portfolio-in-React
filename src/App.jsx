import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import RowExample from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <RowExample>
          <Col md={{ span: 4, offset: 0 }}>
            <h1 className="titles">Full Stack Engineer</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 1 }}>
            <h1 className="titles">Automotive Technician</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="titles">Teaching Assistant</h1>
          </Col>
        </RowExample>
        <RowExample>
          <Col md={{ span: 6, offset: 6 }}>
            <h1 className="titles">Devoted Father</h1>
          </Col>
        </RowExample>
      </Container>
      <Container>
        <RowExample>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
          <Col>
            <Image />
          </Col>
        </RowExample>
      </Container>
    </div>
  );
}

export default App;
