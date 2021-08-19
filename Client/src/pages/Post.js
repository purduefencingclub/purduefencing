import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import {
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from "react-bootstrap";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/index.css";

const Post = (props) => {
  const post = useParams();

  const [thisPost, setThisPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://purduefencing.com/v1/api/blogs/display/${post.id}`
      );
      setThisPost(res.data);
      console.log(res.data);
    };

    fetchPosts();
  });

  const imagePath = `/images/${thisPost.image}`;
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
      <br />
      <br />
      <Container className="join-content-container">
        <Card>
          <Card.Img
            variant="top"
            src={imagePath}
            className="fencing-post-img"
          />
          <Card.Body>
            <Card.Title>{thisPost.title}</Card.Title>
            <Card.Text>{thisPost.body}</Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
      <br />
      <Footer></Footer>
    </>
  );
};

export default withRouter(Post);
