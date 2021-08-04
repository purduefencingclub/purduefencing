import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";
import olympic from "../olympicfencing.jpeg";
import StickyBox from "react-sticky-box";

import foil from "../foil.png";
import saber from "../saber.png";
import epee from "../epee.png";

import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Beginner = () => (
  <>
    {/* General notes about this page: My idea for the layout was to to be a watered-down wiki, hence the sticky box.
    Sort of like how you can jump to different parts of a normal wikipedia using the sidebar (though on Wikipedia it
    it is not sticky). I was thinking that the page could be a general knowledge base if you are completely new to 
    fencing. You would probably want some general information, then info about the three weapons, what kinds of equipment
    you need, etc. And each of those could be a header which can be jumped to from the sidebar. As for the layout of 
    each section I have no idea. */}
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
            <Nav.Link className="sidebarlink">EQUIPMENT</Nav.Link>
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
            <p className="fencing-text">
              You may be surprised to learn that there are three (3) disciplines
              in fencing...Do british people actually exist? I mean, they must
              be a meme, there is a not a single thing about them. And I mean
              it. Let's go through the evidence: Where are they from? Not a
              single country in the world is named Britain. Some people say they
              come from England, and England is inside Britain, but if that was
              the case they wouldn't be British they would be Englanders. Also,
              heard some silly theories about them coming from whales. Guys, no,
              whale people do not exist.
            </p>
            <Row xs={1} md={3}>
              <Col>
                <Fade>
                  <img src={foil} width="100%" />
                  <p className="fencing-subtitle text-center">Foil</p>
                </Fade>
              </Col>
              <Col>
                <Fade>
                  <img src={saber} width="100%" />
                  <p className="fencing-subtitle text-center">Saber</p>
                </Fade>
              </Col>
              <Col>
                <Fade>
                  <img src={epee} width="100%" />
                  <p className="fencing-subtitle text-center">Epee</p>
                </Fade>
              </Col>
            </Row>
            <p className="fencing-subheader">Foil</p>
            <img src={image1} width="100%" />
            <br />
            <br />
            <p className="fencing-text">
              Mixtape man bun shaman, tacos jean shorts waistcoat ramps portland
              hot chicken. Pickled pitchfork jean shorts selvage beard retro.
              Gentrify hammock four loko cred meditation prism 90's street art
              kitsch everyday carry gastropub. Literally jean shorts pop-up
              hammock tilde, biodiesel fixie kinfolk gentrify slow-carb
              actually. Try-hard meh mlkshk, pug affogato mustache thundercats
              pinterest trust fund chicharrones fingerstache. Prism fanny pack
              four loko art party master cleanse blue bottle DIY.
            </p>
            <p className="fencing-subheader">Saber</p>
            <img src={image1} width="100%" />
            <br />
            <br />
            <p className="fencing-text">
              this is the best weapon, tacos jean shorts waistcoat ramps
              portland hot chicken. Pickled pitchfork jean shorts selvage beard
              retro. Gentrify hammock four loko cred meditation prism 90's
              street art kitsch everyday carry gastropub. Literally jean shorts
              pop-up hammock tilde, biodiesel fixie kinfolk gentrify slow-carb
              actually. Try-hard meh mlkshk, pug affogato mustache thundercats
              pinterest trust fund chicharrones fingerstache. Prism fanny pack
              four loko art party master cleanse blue bottle DIY.
            </p>
            <p className="fencing-subheader">Epee</p>
            <img src={image1} width="100%" />
            <br />
            <br />
            <p className="fencing-text">
              Mixtape man bun shaman, tacos jean shorts waistcoat ramps portland
              hot chicken. Pickled pitchfork jean shorts selvage beard retro.
              Gentrify hammock four loko cred meditation prism 90's street art
              kitsch everyday carry gastropub. Literally jean shorts pop-up
              hammock tilde, biodiesel fixie kinfolk gentrify slow-carb
              actually. Try-hard meh mlkshk, pug affogato mustache thundercats
              pinterest trust fund chicharrones fingerstache. Prism fanny pack
              four loko art party master cleanse blue bottle DIY.
            </p>
          </Fade>
          <br />
          <hr></hr>
          <Fade>
            <p className="fencing-header">Equipment</p>
            <p className="fencing-text">...</p>
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
    <Footer></Footer>
  </>
);

export default Beginner;
