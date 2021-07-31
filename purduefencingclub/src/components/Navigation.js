import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Form,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../logo.svg";

import "../styles/index.css";

const Navigation = () => (
  <div>
    <Navbar className="nav-primary" expand="lg">
      <Container>
        <Row>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="outer">
                <img src={Logo} width="100px" />
                <div className="overlay"></div>
              </div>
            </Navbar.Brand>
          </LinkContainer>
        </Row>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className="navlink">HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/officers">
                <Nav.Link className="navlink">OFFICERS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/join">
                <Nav.Link className="navlink">JOIN US</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="navlink">CONTACT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link className="navlink navlink-news">NEWS</Nav.Link>
              </LinkContainer>
              <NavDropdown
                id="dropdown-basic-button"
                title="RESOURCES"
                menuVariant="dark"
                className="navdrop"
              >
                <LinkContainer to="/beginner">
                  <NavDropdown.Item className="droplink">
                    Beginner's Page
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/FAQ">
                  <NavDropdown.Item className="droplink">FAQ</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default Navigation;
