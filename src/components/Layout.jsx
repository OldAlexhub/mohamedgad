import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const LayoutComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/aboutme">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/analysis">
                Career Analysis
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hobbies">
                Hobbies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects">
                Projects Overview
              </Nav.Link>
              <Nav.Link as={NavLink} to="/articles">
                Data Analysis & ML
              </Nav.Link>
              <Nav.Link as={NavLink} to="/megaprojects">
                Mega Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ marginTop: "20px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default LayoutComponent;
