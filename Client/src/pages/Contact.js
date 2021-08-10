import React, { useState, setStatus } from "react";
import { Nav, Container, Button, Row, Col, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";

// To-Do: FORM VALIDATION YAY
const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <script
        src="https://kit.fontawesome.com/a17da011a4.js"
        crossorigin="anonymous"
      ></script>
      <div className="contact-nav">
        <Navigation></Navigation>
        <div className="header-text">
          <Container>
            <Row>
              <p className="heading-about">GET IN TOUCHE</p>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <div>
        <Container className="fencing-body">
          <Fade>
            <p className="fencing-header">
              Have a question or comment? Leave us a message.
            </p>
            <p className="fencing-subheader">
              We'll get back to you as soon as we can.
            </p>
          </Fade>
          <br />
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" rows={3} id="message" />
              </Form.Group>
              <Button variant="dark" type="submit">
                {status}
              </Button>
            </Form>
          </Container>
          <br />
          <hr></hr>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
