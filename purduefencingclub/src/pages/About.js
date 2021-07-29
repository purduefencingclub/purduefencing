import React from "react";
import { Nav, Container, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const About = () => (
  <>
    <div className="secondary-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">ABOUT US</p>
          </Row>
        </Container>
        <div className="join">
          <Container>
            <Row></Row>
          </Container>
        </div>
      </div>
    </div>
    <div>
      <h1>we really like fence</h1>
    </div>
  </>
);

export default About;
