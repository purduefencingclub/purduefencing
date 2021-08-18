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
          The next beginner's practice session is: Thursday, September 2nd, at
          MP5 in the Corec.
        </h1>
        <br />
        <hr></hr>
        <Fade>
          <br />
          <h2>Pre-Practice Item 1: Sign the Waiver</h2>
          <p className="fencing-text">
            Before you can start fencing, you'll have to sign our waiver.
            Fencing isn't dangerous, but it is a contact sport!
          </p>
          <Button variant="dark">Sign The Waiver Here</Button>
          <br />
          <Button variant="dark">Waiver for Minors</Button>
        </Fade>
        <br />
        <hr></hr>
        <Fade>
          <br />
          <h2>Pre-Practice Item 2: Wear the Right Clothes</h2>
          <p className="fencing-text">
            Make sure you wear gym shoes and athletic clothing to practice.
          </p>
          <br />
        </Fade>
        <hr></hr>
        <br />
        <Fade>
          <h2>
            (Optional) Pre-Practice Item 3: Skim the
            <a href="/beginner"> Beginner </a> Resource Page
          </h2>
          <p className="fencing-text">
            This page has some info on the basics of fencing that will give you
            a head start before practice. If you can't read it though, don't
            worry, we'll cover everything at practice.
          </p>
          <br />
        </Fade>
        <hr></hr>
        <h2>
          If you've signed the waiver, and are wearing the right clothes, you're
          ready to go! Just meet us at the Corec, and we've got the rest.
          Welcome to fencing!
        </h2>
      </Container>
      <br />
      <br />
    </div>
    <Footer></Footer>
  </>
);

export default SignUp;
