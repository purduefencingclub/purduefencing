import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const About = () => (
  <>
    {/* General notes about this page: I don't really like the layout of the first section. It could
    definitely be improved. The second section with the "beliefs" I think makes a lot of sense to add.
    I got those words from the consitution of the club. I like the icons too.  */}
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="secondary-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">ABOUT US</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div className="d-flex justify-content-center">
      {/* After a little research I think adding these classnames aren't a good way to style the page.
    I originally wanted the last columns in the grid to be center aligned, but I think that
    A) looks worse and B) is unneccesary, so perhaps not doing this is better */}
      <Container className="about-intro">
        <Fade>
          <Row>
            <Col>
              <br />
              <p className="about-header text-uppercase text-center">
                100 Years of Slashing, Parrying, Stabbing, and Reposting
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="image-row-1">
            <Col>
              <h3>Happy 100th Anniversary!</h3>
              <br />
              <p>
                The Purdue Fencing Club was founded in 1922 as a five-man
                varsity fencing squad. As the varsity squad gained popularity,
                in 1935, an honorary fraternal order, Silver Mask, formed. In
                1970, men's varsity fencing dissolved into Purdue Fencing Club
                in its modern form. The Purdue Fencing Club is not only one of
                the longest standing clubs on the Purdue University campus, it
                is also one of the oldest fencing clubs in the US!
              </p>
              <br />
            </Col>
            <Col>
              <img src={image1} width="653px" />
            </Col>
          </Row>
          <br />
          <br />
        </Fade>
        <br />
        <hr></hr>
        <br />
        <br />
        <Container className="fencing-carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Container>
        <br />
        <br />
        <hr></hr>
        <div className="work-improvement">
          <Fade>
            <h2>OUR BELIEFS</h2>
            <br />
            <br />
            <Row>
              <Col>
                <i class="fas fa-hands-helping fa-3x"></i>
                <h2>Sportsmanship.</h2>
                <br />
                <p>
                  At PFC, we believe that sportsmanship is an integral part of
                  not only competition, but our club as well. We strive to
                  achieve our goals with proper consideration for fairness,
                  ethics, and respect.
                </p>
              </Col>
              <Col>
                <i class="fas fa-running fa-3x"></i>
                <h2>Athleticism.</h2>
                <br />
                <p>
                  Within our club, we cultivate a positive environment towards
                  exercise and athleticism. Fitness is a regular part of PFC, in
                  addition to fencing. We encourage all members to participate
                  in conditioning regardless of their current physical ability.
                </p>
              </Col>
              <Col>
                <i class="fas fa-hammer fa-3x"></i>
                <h2>Improvement.</h2>
                <br />
                <p>
                  The ability to learn and push ourselves to achieve our goals
                  is critical, especially in a university environment. We value
                  improving over winning, in both practice or tournaments.
                </p>
              </Col>
              <Col>
                <i class="fas fa-users fa-3x"></i>
                <br />
                <h2>Community.</h2>
                <br />
                <p>
                  Above all else, PFC is a community. We are proud to welcome
                  anyone with interest in fencing, regardless of skill, race,
                  religion, gender identity, sex, age, or disability. We hope to
                  see you at practice!
                </p>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </div>
    <Footer></Footer>
  </>
);

export default About;
