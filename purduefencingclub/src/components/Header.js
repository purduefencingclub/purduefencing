import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../nasa.png";
import Navigation from "./Navigation";
import "../styles/index.css";

const Header = () => (
  <div className="navWrapper">
    <Navigation></Navigation>
    <br />
    <div className="header-text">
      <Container>
        <p className="heading-purdue">PURDUE</p>
      </Container>
      <Container>
        <Row>
          <p className="heading-fencing">FENCING</p>
        </Row>
      </Container>
      <div className="join">
        <Container>
          <Row>
            <LinkContainer to="/join">
              <Nav.Link className="join-text">
                <Button
                  variant="dark primary"
                  size="lg"
                  className="join-button"
                >
                  Join Us >
                </Button>
              </Nav.Link>
            </LinkContainer>
          </Row>
        </Container>
      </div>
    </div>
  </div>
);

export default Header;
