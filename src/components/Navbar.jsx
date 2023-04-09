import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Resume from "../assets/docs/Resume.pdf";

function CollapsibleExample() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  console.log(location);

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
            {location.pathname === "/projects" ||
            location.pathname === "/contact" ? (
              <Nav.Link href="/">Home</Nav.Link>
            ) : (
              <Nav.Link href="#about">About</Nav.Link>
            )}
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending nav-link"
                  : isActive
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              Projects
            </NavLink>
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/contact">Email</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Resume} download>
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {location.pathname === "/contact" ? (
            ""
          ) : (
            <>
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
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
