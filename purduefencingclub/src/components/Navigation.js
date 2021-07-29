import React from "react";
import { Navbar, Nav, Container, Col, Row, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../nasa.png";

import "../styles/index.css";

const Navigation = () => (
  <div>
    <Navbar className="nav-primary">
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
                <Nav.Link className="navlink">HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">OFFICERS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">JOIN US</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">CONTACT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navlink">RESOURCES</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  </div>
);

export default Navigation;
