import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/index.css";

const Footer = () => (
  <div className="footerWrapper">
    <Container className="footerContainer">
      <Row className="footerRow">
        <Col>
          <p className="footerText">Purdue Fencing Club 2021</p>
        </Col>
        <Col>
          <p className="footerSecret text-center">
            Saber > Foil > Epee :) - Sasha
          </p>
        </Col>
        <Col className="footer-col-2">
          <Container className="footer-icons">
            <i class="fab fa-instagram fa-2x footer-icon"></i>
            <i class="fab fa-twitter fa-2x footer-icon"></i>
            <i class="fab fa-facebook fa-2x footer-icon"></i>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
