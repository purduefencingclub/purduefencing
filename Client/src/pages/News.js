import React, { useState, useEffect } from "react";
import axios from "axios";
import { Nav, Container, Button, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";
import Posts from "../components/Posts";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";

const News = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://purduefencing.com/v1/api/blogs/display"
      );
      setPosts(res.data);
      console.log(res.data);
    };

    fetchPosts();
  });

  return (
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
        <Container className="fencing-body">
          <Fade>
            <Posts posts={posts} />
          </Fade>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default News;
