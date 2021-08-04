import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";

const News = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="news-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">NEWS</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="contact-intro">
        <Fade>
          <h1>react stuff idk</h1>
        </Fade>
      </Container>
    </div>
    <Footer></Footer>
  </>
);

export default News;
