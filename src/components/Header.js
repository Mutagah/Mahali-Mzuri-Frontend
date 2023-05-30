import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <Container fluid>
      <Navbar sticky="top" style={{ backgroundColor: "#000000" }} expand="lg">
        <Container fluid className="mx-5 px-5">
          <Navbar.Brand href="home">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="../logo.jpg"
                alt="logo"
                className=" rounded-4"
                height="70"
                width="100"
              />
            </div>
            <div>
              <h1 style={{ color: "#f17a12" }}>Mahali Mzuri</h1>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: "White" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              fill
              variant="tabs"
              className="me-auto"
              style={{ marginLeft: "10px" }}
            >
              <Nav.Link href="/" className="text-white mx-3">
                HOME
              </Nav.Link>
              <Nav.Link href="/services" className="text-white mx-3">
                SERVICES
              </Nav.Link>
              <Nav.Link href="/about" className="text-white mx-3">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/rooms" className="text-white mx-3">
                ROOMS
              </Nav.Link>
              <Nav.Link href="/login" className="text-white mx-3">
                LOGIN
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/profile">
                <BsPersonFill size={30} style={{ color: "white" }} />
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Profile"
                id="collasible-nav-dropdown"
                style={{
                  color: "white",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;

