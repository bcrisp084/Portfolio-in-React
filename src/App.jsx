import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import RowExample from "./components/Row";
import Column from "./components/Col";
import Card from "./components/Card";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <RowExample>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
          <Column>
            <Image />
          </Column>
        </RowExample>
      </Container>
    </div>
  );
}

export default App;
