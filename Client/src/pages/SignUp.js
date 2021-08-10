import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Fade from "react-reveal";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";

const SignUp = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="sign-up-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">JOINING PFC</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="fencing-body">
        <h1>
          The next beginner's practice session is: [date here] @[location]
        </h1>
        <hr></hr>
        <Fade>
          <h1>Pre-Practice Item 1: Sign the Waiver</h1>
          <p className="fencing-text">
            I'm baby beard cliche kombucha bushwick, biodiesel heirloom mlkshk.
            8-bit hoodie listicle cold-pressed, gastropub intelligentsia ramps
            swag migas disrupt activated charcoal kombucha 90's la croix.
            Church-key cloud bread hoodie fam. Pinterest green juice cliche,
            gentrify gluten-free typewriter tbh.
          </p>
          <Button variant="dark">Sign The Waiver Here</Button>
          <br />
          <Button variant="dark">Waiver for Minors</Button>
        </Fade>
        <hr></hr>
        <Fade>
          <h1>Pre-Practice Item 2: Wear the Right Clothes</h1>
          <p className="fencing-text">
            Make sure you wear gym shoes and athletic clothing bla bla bla jeans
            are bad
          </p>
        </Fade>
        <hr></hr>
        <Fade>
          <h1>
            (Optional) Pre-Practice Item 3: Skim the
            <a href="/beginner"> Beginner </a> Resource Page
          </h1>
          <p className="fencing-text">
            This page has some info on the basics of fencing that will give you
            a head start before practice. If you can't read it though, don't
            worry, we'll cover everything at practice.
          </p>
        </Fade>
        <hr></hr>
      </Container>
    </div>
    <Footer></Footer>
  </>
);

export default SignUp;
