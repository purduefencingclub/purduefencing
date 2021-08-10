import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import Faq from "react-faq-component";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";
import { Component } from "react";

// Some notes on how this page works.
/* The FAQ is made with a react library called react-faq-component. Documentation exists online,
but the usage is pretty basic. All the text is contained in the data const declared below.
Edit the title, rows, and content in each row as you wish, just make sure to follow the structure
below. Styles can be edited in the styles const, and some configs exist which can be looked up
online too. More custom styles exist but must be selected by targeting the elements within the
div wrapper. Example:

.faq-row-wrapper .faq-title {
  font-family: "Oswald", sans-serif;
}

This is taken directly from the index.css stylesheet. Some more examples exist online too.

You can also include markup in the content value. It's kinda finnicky with images though. 
*/
const data = {
  title: "Purdue Fencing Club FAQ",
  rows: [
    {
      title: "Do I need experience to join the club?",
      content: "Yes Gandalf!",
    },
    {
      title: "How do I join the club?",
      content:
        "Sustainable single-origin coffee literally typewriter migas ennui butcher glossier succulents edison bulb. Umami 3 wolf moon vinyl ethical quinoa. Trust fund kogi jean shorts disrupt kickstarter unicorn green juice small batch gochujang freegan vegan fanny pack williamsburg. Polaroid williamsburg banjo small batch iPhone narwhal. Wolf synth cardigan chartreuse put a bird on it, post-ironic cornhole skateboard tbh cloud bread poke roof party ramps. Cornhole disrupt put a bird on it, echo park raclette iceland gentrify street art four dollar toast twee plaid drinking vinegar food truck humblebrag.",
    },
    {
      title: "Can I rent equipment?",
      content:
        "Offal copper mug vaporware man braid gluten-free hell of. Chia taxidermy hexagon, bushwick squid kitsch copper mug iPhone stumptown. Glossier crucifix asymmetrical seitan sriracha cloud bread squid vexillologist chicharrones semiotics. Tofu williamsburg pok pok master cleanse, banh mi four dollar toast mixtape. Heirloom organic shaman stumptown.",
    },
    {
      title: "Is fencing dangerous?",
      content: "haha yeah",
    },
    {
      title: "Do I have to pick one weapon to join the club?",
      content: "haha yeah",
    },
    {
      title: "Can I switch weapons after I've picked one?",
      content: "haha yeah",
    },
    {
      title: "How do I pay club dues?",
      content:
        "Fanny pack gochujang wayfarers man bun, cold-pressed vice XOXO mumblecore literally mixtape. Swag pug kitsch paleo, bushwick irony synth pork belly. Etsy humblebrag leggings crucifix four loko jean shorts cronut, microdosing coloring book blog ramps sriracha kickstarter. Vexillologist chartreuse wayfarers hashtag, distillery semiotics authentic chia affogato organic vaporware migas XOXO. Pop-up slow-carb lo-fi ennui street art hella.",
    },
    {
      title: "How do I contact the club?",
      content: "haha yeah",
    },
    {
      title: "How many members of the club are there?",
      content: "haha yeah",
    },
    {
      title: "How long have the club members been fencing for?",
      content: "haha yeah",
    },
    {
      title: "Are there any other fencing clubs near Purdue?",
      content: "haha yeah",
    },
    {
      title: "Who gets to participate in tournaments?",
      content: "haha yeah",
    },
    {
      title: "How do we travel to tournaments?",
      content: "haha yeah",
    },
    {
      title: "Do you have to wear a face mask while fencing?",
      content: "haha yeah",
    },
  ],
};

const styles = {
  titleTextColor: "black",
  rowTitleColor: "black",
};

const config = {
  animate: true,
  tabFocus: true,
};

const FAQ = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="faq-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">FAQ</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="fencing-body">
        <Fade>
          <div className="faq-row-wrapper">
            <Faq data={data} styles={styles} config={config}></Faq>
          </div>
        </Fade>
      </Container>
    </div>
    <Footer></Footer>
  </>
);

export default FAQ;
