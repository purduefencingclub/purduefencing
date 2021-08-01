import React from "react";
import {
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Join = () => (
  <>
    {/* General notes about this page: Not really sure about the design, I kinda just put stuff on the page.
    It's okay but it also feels like something is missing. I can't tell if it's a content issue or a space
    issue. I like the cards here, though, as it stylistically matches the officers page and provides
    an easy way to update the site in the future.
    Additionally, it would be really cool to have these pull info from an event database, which would also 
    signicantly reduce the amount of work in updating the page. */}
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
    <h1 className="text-center">OPPORTUNITIES FOR BEGINNERS</h1>
    <Container className="join-content-container">
      <hr></hr>
      <br />
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="bottom" src={image1} />
            <Card.Body>
              <Card.Title>Beginner's Class</Card.Title>
              <Card.Text>
                Learn to fence! Over a month, we will teach you how to Af
                sriracha etsy gochujang swag hot chicken bicycle rights yuccie
                hella slow-carb irony locavore fixie.
                <br />
                <br />
                <LinkContainer to="/sign-up">
                  <Button variant="dark">Sign up here!</Button>
                </LinkContainer>
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Next Class: August 29th
              <br />@ The Corec, 4pm
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="bottom" src={image1} />
            <Card.Body>
              <Card.Title>Attend a practice session</Card.Title>
              <Card.Text>
                This does not change the fact that in Antarctica there are 21
                million penguins and in Malta there are 502,653 inhabitants. So
                if the penguins decide to invade Malta, each Maltese will have
                to fight 42 penguins.
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Next Practice Session: August 29th
              <br />@ The Corec Room 31415, 9pm
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <h1 className="text-center">UPCOMING EVENTS</h1>
    <Container className="join-content-container">
      <hr></hr>
      <br />
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="bottom" src={image1} />
            <Card.Body>
              <Card.Title>August Call Out</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">August 29th @ 2pm</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="bottom" src={image1} />
            <Card.Body>
              <Card.Title>Fencing Demo @ Wherever</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">August 29th @ 2pm</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="right" src={image1} />
            <Card.Body>
              <Card.Title>Club Fair Booth Thing</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">August 29th @ 2pm</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    <br />
  </>
);

export default Join;
