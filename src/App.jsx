import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Container />
    </div>
  );
}

export default App;
