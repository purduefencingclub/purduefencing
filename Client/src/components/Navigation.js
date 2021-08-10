import React from "react";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../logo.svg";

import "../styles/index.css";

const Navigation = () => (
  <div>
    {/* General notes about this component: As Eric pointed out, the font could probably be bigger. What 
    I've gone back and forth with is the color of the links. Currently they are black, pretty much the
    only other option is white. The problem with white is that it tends to blend into the background
    of certain pictures. I don't want to change the color overlay for consistency sake. We could change
    the pictures though. When they don't blend in, I do think white looks better.
    Also, the resources dropdown might be better as a hover rather than a click, but I can't get it working. */}
    <Navbar className="nav-primary" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <div className="outer">
              <img src={Logo} width="100px" />
              <div className="overlay"></div>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="nav-links">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
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
        </div>
      </Container>
    </Navbar>
  </div>
);

export default Navigation;
