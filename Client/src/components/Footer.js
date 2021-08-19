import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/index.css";
import { Hidden } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="footerWrapper">
    <Container className="footerContainer">
      <Row className="footerRow" xs={2} md={2}>
        <Col>
          <p className="footerText">Purdue Fencing Club 2021</p>
        </Col>
        <Hidden xs sm md lg>
          <p className="secret-text">Saber > Foil > Epee - Sasha :)</p>
        </Hidden>
        <Col className="footer-icons">
          <Container>
            <Row xs={3}>
              <Col>
                <a href="https://twitter.com/purduefencing?lang=en">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    color="white"
                    className="footer-icon"
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/purduefencing/?hl=en">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    color="white"
                    className="footer-icon"
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/purduefencing/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    color="white"
                    className="footer-icon"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
