import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const About = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="join-nav">
      <Navigation></Navigation>
      <div>
        <Container className="join-header">
          <Row>
            <p className="heading-about">EN GARDE.</p>
            <p className="heading-about">
              READY. <span className="join-fence-text">FENCE.</span>
            </p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div className="d-flex justify-content-center">
      <Container className="about-intro">
        <Fade>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <br />
          <br />
        </Fade>
      </Container>
    </div>
  </>
);

export default About;
