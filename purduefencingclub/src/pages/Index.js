import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../components/Header";
import "../styles/index.css";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";
import Fade from "react-reveal";

import chicago from "../chicago.png";
import ohio from "../ohio.png";
import iu from "../iu.png";
import notredame from "../notredame.png";
import cleveland from "../cleveland.png";
import northwestern from "../northwestern.png";
import minnesota from "../minnesota.png";
import wayne from "../wayne.png";

const Index = () => (
  <>
    {/* General notes about this page: Nothing too special going on with this page. I originally just wanted a longer 
    page split up by sections with a header, picture, and a paragraph or so. I figured this page should have club-specific
    information rather than fencing specific, hence the universities we've competed, where members are from, etc. 
    I also think that we should somehow emphasize the fact that we are open to complete beginners and encourage
    beginners to join. I think it's worth stating somewhere that a lot of our own competitive fencers started 
    in college. */}
    <Header></Header>
    <br />
    <div>
      <Container className="home-intro">
        {/* Each body section is wrapped in a Fade element from 'react-reveal' so they
        fade onto the page, but larger or smaller elements can be faded if that
        seems better */}
        <Fade>
          <Row>
            <Col>
              <img src={image1} width="500px" />
            </Col>
            <Col>
              <h1>The Official Fencing Club of Purdue University</h1>
              <br />
              <br />
              <p className="home-text">
                I'm baby cold-pressed pour-over tofu bicycle rights. Tofu meh
                chambray drinking vinegar, lo-fi man bun lyft. Portland fanny
                pack 8-bit, fixie you probably haven't heard of them shoreditch
                artisan. Farm-to-table letterpress cloud bread art party
                stumptown vaporware health goth waistcoat kombucha prism ethical
                shabby chic.
              </p>
            </Col>
          </Row>
        </Fade>
        {/* Quick note, I'm using breaks for quick spacing so I don't have to add more CSS, but this will get changed */}
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <br />
        <br />
        <br />
        <Fade>
          <Row>
            <Col>
              <h1>Open to all skill levels</h1>
              <h2>Beginners welcome!</h2>
              <p className="home-text">
                Butcher drinking vinegar polaroid jean shorts small batch four
                dollar toast skateboard. Put a bird on it bespoke air plant
                organic post-ironic fashion axe 90's umami bicycle rights
                flexitarian yr sustainable try-hard. Bespoke readymade migas
                cornhole. Crucifix iPhone semiotics artisan, freegan next level
                humblebrag polaroid heirloom pop-up put a bird on it squid
                helvetica portland.
              </p>
            </Col>
            <Col>
              <img src={image1} width="500px" />
            </Col>
          </Row>
        </Fade>
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <br />
        <br />
        <Fade>
          <div className="university-header">
            <h2>Universities We've Competed With</h2>
          </div>
          <br />
          <br />
          <br />
          <Container className="universities">
            <Row>
              <Col className="d-flex justify-content-center">
                <Image src={chicago} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={ohio} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={iu} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={notredame} className="uni-logo" />
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row className="universities">
              <Col className="d-flex justify-content-center">
                <Image src={wayne} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <Image src={minnesota} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={cleveland} className="uni-logo" />
              </Col>
              <Col className="d-flex justify-content-center">
                <img src={northwestern} className="uni-logo" />
              </Col>
            </Row>
          </Container>
        </Fade>
        <br />
        <br />
        <br />
        <br />
        <hr></hr>
        <br />
        <Container>
          <Fade>
            <div className="university-header">
              <h2>Members From All Over the Country</h2>
            </div>
          </Fade>
          {/* Not really sure what to add here, maybe a map? */}
        </Container>
      </Container>
    </div>
  </>
);

export default Index;
