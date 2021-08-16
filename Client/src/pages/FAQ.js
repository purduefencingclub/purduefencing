import React from "react";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import Faq from "react-faq-component";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";
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
      content:
        "No experience required! We are beginner friendly and host a beginner fencing course each fall.",
    },
    {
      title: "How do I join the club?",
      content:
        "You can either attend a call out meeting at the beginning of fall semester or email the club president and they will get you more information.",
    },
    {
      title: "Can I rent equipment?",
      content:
        "Definitely! Our Equipment rental fee is 40$ in addition to club dues and will be available for all who need it.",
    },
    {
      title: "Is fencing dangerous?",
      content:
        "No. Fencing is a sport that has been around for a long time and while it originated from dueling that could end in injury, we now wear plenty of protective gear to make sure injuries are few and far between. ",
    },
    {
      title: "Do I have to pick one weapon to join the club?",
      content:
        "No. We have several club members that are proficient in two or all three weapons. If you are new to fencing we do advise that you try to pick your favorite and stick with it until you get a little more experience.",
    },
    {
      title: "Can I switch weapons after I've picked one?",
      content:
        "Absolutely! If you aren’t in love with your initial weapon of choice after a while, we encourage you to try a different weapon to really find one that you enjoy.",
    },
    {
      title: "How do I pay club dues?",
      content:
        "Club dues can be paid via cash or check to the Purdue Fencing Club and then be given to the President or Treasurer for deposit, or they can be paid online through the TooCOOL storefront, accessible through your myPurdue “Life @ Purdue” page. Once there you can search for the fencing club and pay for the correct item.",
    },
    {
      title: "How do I contact the club?",
      content:
        "Send us an email to purdue.fencing.club@gmail.com or reach out to us on social media! You can also always contact the President directly if you would prefer.",
    },
    {
      title: "How many members of the club are there?",
      content:
        "The Purdue Fencing Club typically has over 40 active members at any given time although this number fluctuates throughout the year.",
    },
    {
      title: "How long have the club members been fencing for?",
      content:
        "Many club members started fencing in college, but we also have many members that have significantly more experience and have been fencing since they were children. These more experienced members usually make up our Captain team and will help teach newer fencers if asked.",
    },
    {
      title: "Are there any other fencing clubs near Purdue?",
      content:
        "River City Fencing is just over the Wabash River in Lafayette and the Indianapolis Fencing Club is housed in Noblesville Indiana.",
    },
    {
      title: "Who gets to participate in tournaments?",
      content:
        "We try to allow all of our members to attend tournaments if they are interested, however practice attendance is a large factor when Captains are choosing their team to attend.",
    },
    {
      title: "How do we travel to tournaments?",
      content:
        "Given the current pandemic we are still unsure of what our travel schedule will look like for the 2021-2022 school year, but typically yes!",
    },
    {
      title: "Do you have to wear a face mask while fencing?",
      content:
        "Yes. Per Protect Purdue rules all indoor activities including athletics will be required to wear face masks for the duration of the activity for the Fall 2021 semester.",
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
    <br />
    <br />
    <Footer></Footer>
  </>
);

export default FAQ;
