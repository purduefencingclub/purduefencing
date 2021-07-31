import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";
import olympic from "../olympicfencing.jpeg";
import StickyBox from "react-sticky-box";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Beginner = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="beginner-nav">
      <Navigation></Navigation>
      <div className="beginner-text">
        <Container>
          <Row>
            <p className="heading-about">WELCOME TO FENCING</p>
            <p className="beginner-sub">We're happy to have you.</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container style={{ display: "flex", alignItems: "flex-start" }}>
        <StickyBox offsetTop={40} offsetBottom={10} className="stickybox">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="sidebarlink">OVERVIEW</Nav.Link>
            <Nav.Link className="sidebarlink">WEAPONS</Nav.Link>
            <Nav.Link className="sidebarlink">FENCING</Nav.Link>
          </Nav>
        </StickyBox>
        <Container className="beginner-content">
          <p className="fencing-header">Overview</p>
          <hr></hr>
          <br />
          <Fade>
            <Row xs={2} md={2}>
              <Col>
                <img src={olympic} width="100%" />
              </Col>
              <Col>
                <p className="fencing-text">
                  Fencing is an olympic sport bla bla Not funny I didn't laugh.
                  Your joke is so bad I would have preferred the joke went over
                  my head and you gave up re-telling me the joke. To be honest
                  this is a horrid attempt at trying to get a laugh out of me.
                  Not a chuckle, not a hehe, not even a subtle burst of air out
                  of my esophagus. Science says before you laugh your brain
                  preps your face muscles but I didn't even feel the slightest
                  twitch.
                </p>
              </Col>
            </Row>
            <br />
          </Fade>
          <hr></hr>
          <Fade>
            <p className="fencing-header">Weapons</p>
          </Fade>
        </Container>
      </Container>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

export default Beginner;
