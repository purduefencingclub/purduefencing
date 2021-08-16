import React from "react";
import { Nav, Container, Carousel, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";
import olympic from "../images/olympicfencing.jpeg";
import StickyBox from "react-sticky-box";
import { Visible, Hidden } from "react-grid-system";

import foil from "../images/foilpic.png";
import saber from "../images/saberpic.png";
import epee from "../images/epeepic.png";

import sabertarget from "../images/Fencing_saber_valid_surfaces.png";
import epeetarget from "../images/Fencing_epee_valid_surfaces.png";
import foiltarget from "../images/Fencing_foil_valid_surfaces_2009.png";

import foilequipment from "../images/foilequipment.jpeg";
import saberequipment from "../images/saberequipment.jpeg";
import epeeequipment from "../images/epeeequipment.jpeg";

import frontzipjacket from "../images/frontzipjacket.jpeg";
import backzipjacket from "../images/backzipjacket.jpeg";
import standardmask from "../images/standardmask.jpeg";
import sabermask from "../images/sabermask.jpeg";
import fencingknickers from "../images/fencingknickers.jpeg";
import menschestprotector from "../images/menschestprotector.jpeg";
import womenschestprotector from "../images/womenschestprotector.jpeg";

import fencingpiste2 from "../images/fencingpiste2.png";
import fencingpiste1 from "../images/fencingpiste1.jpeg";

import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Beginner = () => {
  return (
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
              <p className="fencing-jumbotron-header">WELCOME TO FENCING</p>
              <p className="fencing-jumbotron-subheader">
                We're happy to have you.
              </p>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <div>
        <Container style={{ display: "flex", alignItems: "flex-start" }}>
          <Hidden xs>
            <StickyBox offsetTop={40} offsetBottom={10} className="stickybox">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link className="sidebarlink">
                  <Link to="overview">OVERVIEW</Link>
                </Nav.Link>
                <Nav.Link className="sidebarlink">
                  <Link to="weapons">WEAPONS</Link>
                </Nav.Link>
                <Nav.Link className="sidebarlink">
                  <Link to="equipment">EQUIPMENT</Link>
                </Nav.Link>
                <Nav.Link className="sidebarlink">
                  <Link to="strip">STRIP</Link>
                </Nav.Link>
              </Nav>
            </StickyBox>
          </Hidden>
          <Container className="fencing-body">
            <p className="fencing-header" id="overview">
              Overview
            </p>

            <hr></hr>
            <br />
            <Fade>
              <Row xs={1} sm={1} md={1}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image1}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image1}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Row>
              <br />
              <Row>
                <p className="fencing-text">
                  Modern fencing (sometimes referred to as olympic fencing) is a
                  competitive combat sport consisting of three disciplines:
                  foil, sabre, and épée. Based on the traditional sport of
                  swordsmanship, modern fencing began in the late 19th century
                  in Italy and France. <br />
                  Each of the three disciplines, or "weapons," are descendents
                  of various styles of dueling. Thus, each weapon has a
                  different style of sword, equipment, rules, and pace. Fencers
                  typically try all three weapons, and then choose one to hone
                  their skills in.
                </p>
              </Row>
            </Fade>
            <hr></hr>
            <Fade>
              <p className="fencing-header" id="weapons">
                Weapons
              </p>
              <p className="fencing-text">
                In all three weapons of fencing, points are scored through the
                sword's contact with the opponent. However, this is roughly
                where the similarities end. Each weapon has a different set of
                scoring rules, different parts of the body where valid touches
                can be made, different equipment, and different swords. <br />
                As a result, there are significant stylistic, tactical, and
                strategic differences between the three.
              </p>
            </Fade>
            <Fade>
              <Row xs={1} md={3}>
                <Col>
                  <Fade>
                    <img src={image1} width="100%" />
                    <p className="fencing-subtitle text-center">Foil</p>
                  </Fade>
                </Col>
                <Col>
                  <Fade>
                    <img src={image1} width="100%" />
                    <p className="fencing-subtitle text-center">Saber</p>
                  </Fade>
                </Col>
                <Col>
                  <Fade>
                    <img src={image1} width="100%" />
                    <p className="fencing-subtitle text-center">Epee</p>
                  </Fade>
                </Col>
              </Row>
            </Fade>
            <hr />
            <Fade>
              <p className="fencing-subheader">Foil</p>
              <p className="fencing-text">
                Foil evolved from the light court sword, which was formally used
                to train nobility for duels. Points in foil are scored with the
                tip of the blade, and valid target area is constrained to the
                torso. Touches to the arms, legs, neck, and head are considered
                off-target. The concept of on-target and off-target evolved from
                the teachings of 18th century fencing masters, who instructed
                their students to aim for the areas of the body containing vital
                organs. (The head is not included because attacks to an
                opponents face were considered disrespectful!)
              </p>
              <br />
              <Row xs={3} md={3}>
                <Col>
                  <img src={foiltarget} width="100%" />
                  <p className="fencing-subtitle text-center">Target Area</p>
                </Col>
                <Col className="text-center">
                  <img src={foil} width="12.5%" />
                  <p className="fencing-subtitle text-center">Blade</p>
                </Col>
                <Col>
                  <img src={foilequipment} width="90%" />
                  <p className="fencing-subtitle text-center">Equipment</p>
                </Col>
              </Row>
              <br />
              {/* <Row xs={1} md={2}>
                <Col>
                  <img className="beginner-img" src={image1} width="100%" />
                </Col>
                <Col>
                  <img className="beginner-img" src={image1} width="100%" />
                </Col>
              </Row> */}
            </Fade>
            <hr />
            <Fade>
              <p className="fencing-subheader">Saber</p>
              {/* <img src={image1} width="100%" /> */}
              <p className="fencing-text">
                The saber (traditionally spelled sabre) is the descendent of the
                slashing cavalry sword. Similar in weight and length to the
                foil, the biggest difference between the two is the use of the
                blade. The saber is both a thrusting and a cutting weapon,
                meaning that sabrists can score touches with the edge of the
                blade as well as the point. The target area in saber is from the
                bend of the hips to the top of the head. This target area is
                designed to simulate an opponent on horseback.
              </p>
              <Row xs={3} md={3}>
                <Col>
                  <img src={sabertarget} width="100%" />
                  <p className="fencing-subtitle text-center">Target Area</p>
                </Col>
                <Col className="text-center">
                  <img src={saber} width="14.5%" />
                  <p className="fencing-subtitle text-center">Blade</p>
                </Col>
                <Col>
                  <img src={saberequipment} width="90%" />
                  <p className="fencing-subtitle text-center">Equipment</p>
                </Col>
              </Row>
              {/* <Row xs={1} md={2}>
                <Col>
                  <img className="beginner-img" src={image1} width="100%" />
                </Col>
                <Col>
                  <img className="beginner-img" src={image1} width="100%" />
                </Col>
              </Row> */}
            </Fade>
            <hr />
            <Fade>
              <p className="fencing-subheader">Epee</p>
              {/* <img src={image1} width="100%" /> */}
              <p className="fencing-text">
                The épée (pronounced EPP-pay) is a direct descendent of the
                dueling sword. It is slightly heavier than the foil, and
                features a larger guard, to protect the hand from touches.
                Similar to foil, touches may only be scored with the tip of the
                blade. However, the entire body is valid target in épée,
                imitating an actual duel.
              </p>
              <Row xs={3} md={3}>
                <Col>
                  <img src={epeetarget} width="100%" />
                  <p className="fencing-subtitle text-center">Target Area</p>
                </Col>
                <Col className="text-center">
                  <img src={epee} width="14.5%" />
                  <p className="fencing-subtitle text-center">Blade</p>
                </Col>
                <Col>
                  <img src={epeeequipment} width="90%" />
                  <p className="fencing-subtitle text-center">Equipment</p>
                </Col>
              </Row>
            </Fade>
            <br />
            <hr></hr>
            <Fade>
              <p className="fencing-header" id="equipment">
                Equipment
              </p>
            </Fade>
            <p className="fencing-subheader">Fencing Jacket</p>
            <p className="fencing-text">
              The standard fencing jacket is worn to protect the torso and arms
              of the fencer, and required for all three weapons. Jackets are
              available in cotton and synthetic materials. Generally, cotton
              tends to be cheaper, but is heavier and hotter. Synthetic
              materials are cooler but more expensive.
              <br />
              <br />
              Additionally, jackets come in either back-zip or front-zip.
              Back-zip jackets are universal (can be worn by both right-handed
              or left-handed fencers), but are harder to put on. Front-zip
              jackets are easier to put on, but must match your dominant hand.
            </p>
            <Row xs={1} md={2}>
              <Col>
                <img src={frontzipjacket} width="100%" />
                <p className="fencing-subtitle text-center">
                  Front-zip style fencing jacket
                </p>
              </Col>
              <Col>
                <img src={backzipjacket} width="100%" />
                <p className="fencing-subtitle text-center">
                  Back-zip style fencing jacket
                </p>
              </Col>
            </Row>
            <hr />
            <p className="fencing-subheader">Fencing Mask</p>
            <p className="fencing-text">
              The fencing mask is one of the most important and personal pieces
              of equipment a fencer owns. Consequently, this is usually one of
              the first things a beginner who is serious about fencing will buy.
              <br />
              <br />
              The mask is worn to protect the head, face, and neck. All modern
              fencing masks will have padding on the inside, both for comfort,
              and to help the mask stay in one place during a bout. Several
              different types of fencing masks exist, depending on whether you
              compete in fencing competitions, and which weapon you fence.
              <br />
              <br />
              Generally, beginners are safe to purchase standard, non-electric
              practice masks. However, if you stick to the sport for a few
              years, and are interested in competing, you will likely need to
              purchase a competition and weapon-specific mask.
            </p>
            <Row xs={1} md={2}>
              <Col>
                <img src={standardmask} width="100%" />
                <p className="fencing-subtitle text-center">
                  Standard Fencing Mask
                </p>
              </Col>
              <Col>
                <img src={sabermask} width="100%" />
                <p className="fencing-subtitle text-center">
                  Saber-specific Competition Mask
                </p>
              </Col>
            </Row>
            <hr />
            <p className="fencing-subheader">Fencing Pants ("Knickers")</p>
            <p className="fencing-text">
              Fencing pants, also just referred to as knickers, are worn to
              protect the lower body. Notably, when correctly sized, they will
              only extend to below the knee. During practice, fencers are
              welcome to wear long soccer-style socks to protect the ankles and
              lower knee, but it is not required.
            </p>
            <Container className="fencing-image-center">
              <img src={fencingknickers} width="50%" />
              <p className="fencing-subtitle text-center">
                Standard Fencing Knickers
              </p>
            </Container>
            <hr />
            <p className="fencing-subheader">Chest Protector</p>
            <p className="fencing-text">
              A chest protector is a plastic piece worn under the jacket to
              protect the chest from bruising. For women, a chest protector is
              required, however for men they are optional.
            </p>
            <Container className="fencing-image-center">
              <Row xs={1} md={2}>
                <Col>
                  <img src={womenschestprotector} width="70%" />
                  <p className="fencing-subtitle text-center">
                    Women's Chest Protector
                  </p>
                </Col>
                <Col>
                  <img src={menschestprotector} width="70%" />
                  <p className="fencing-subtitle text-center">
                    Men's Chest Protector
                  </p>
                </Col>
              </Row>
            </Container>

            <hr />
            <p className="fencing-subheader">(Optional) Electric Wiring</p>
            <p className="fencing-text">
              During competition and formal practice, fencing is "wired" by
              connecting the jacket, mask, and blade (or some combination of the
              three) to a scoring machine. When the blade makes contact with the
              opponent's jacket, an electrical signal is sent to the machine,
              and a light appears, along with a sound cue, indicating that the
              fencer successfully scored a touch. <br />
              <br />
              The equipment needed to properly set up a wired match between two
              opponents varies depending on the weapon being fenced. In general,
              épée requires the least amount of extra equipment (simply one
              chord, and a blade which can connect to it). Foil and saber,
              however, require an extra jacket to be worn over the standard
              white jacket, called a lamé (la-MAY), and a special electrical
              fencing mask. <br />
              <br />
              At a certain point, owning electrical equipment is necessary. For
              beginners, however, you will likely fence "dry" (non-electric) for
              a couple months as you learn the basics of the sport. Once you
              have more experience, any electric equipment you may need can be
              borrowed from the club.
            </p>
            <hr />
            <Fade>
              <p className="fencing-header" id="strip">
                The Fencing Strip
              </p>
              <br />
              <Container className="fencing-image-center">
                <img src={fencingpiste2} width="100%" />
                <br />
                <p className="fencing-text">
                  All fencing bouts take place on a 14-meter strip, or "piste."
                  As pictured above, the strip is split by the the en guarde
                  lines, which are positioned 2 meters from the center, and the
                  warning lines, positioned 5 meters from the center. A fencer
                  is considered out-of-bounds when the tip of their front foot
                  passes the edge of the strip (meaning that as long as they
                  have one foot inside of the strip, they are safe).
                  <br />
                  <br />
                  At the beginning of every point, each fencer places their
                  front foot behind or on the en guarde line. Once the referee
                  says "fence," they are allowed to cross the en guarde line and
                  begin fencing.
                </p>
                <img src={fencingpiste1} width="100%" />
              </Container>
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
};

export default Beginner;
