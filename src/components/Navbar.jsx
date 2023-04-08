import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

function CollapsibleExample() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#main-content">Brian Crisp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button
              onClick={() => {
                handleIncrement();
              }}
              id="add-likes"
              className="btn btn-primary"
            >
              Leave a like
            </button>
          </Nav>
          <Nav className="likes-count">
            <div>
              {count} {count === 1 ? "Like" : "Likes"}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
