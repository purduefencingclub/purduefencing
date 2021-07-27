import React from "react";
import { Navbar, Nav, Container, Col, Row, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../nasa.png";

import "../styles/index.css";

const Navigation = () => (
  <div className="navWrapper">
    <Navbar>
      <Container>
        <Row>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className="outer">
                <img src={Logo} height="85" width="100px" />
                <div className="overlay"></div>
              </div>
            </Navbar.Brand>
          </LinkContainer>
        </Row>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="navlink">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">Officers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">Join Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">Resources</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
    <br />
    <Container>
      <p className="heading-purdue">Purdue</p>
    </Container>
    <Container>
      <Row>
        <p className="heading-fencing">FENCING</p>
      </Row>
    </Container>
  </div>
);

export default Navigation;
