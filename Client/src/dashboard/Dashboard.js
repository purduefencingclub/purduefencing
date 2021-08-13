import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Container, Row, Col, Carousel, Button, Form } from "react-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import Footer from "../components/Footer";
import Post from "../components/DashboardPost";

import Navigation from "../components/Navigation";
import axios from "axios";
let token;

// const [title, setTitle] = useState("");
// const [body, setBody] = useState("");

const Dashboard = (props) => {
  try {
    token = localStorage.getItem("jwtToken").split(" ")[1];
  } catch (err) {
    console.log("Token doesn't exist!");
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://purduefencing.com/v1/api/blogs/display");
      setPosts(res.data);
      console.log(res.data);
    };

    fetchPosts();
  });
  const { user } = props.auth;
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [file, setFile] = useState();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };
  const fileChange = (e) => {
    setFile(e.target.value);
  };
  Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };
  const handleSubmit = (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", file);

    e.preventDefault();
    axios
      .post("https://purduefencing.com/v1/api/posts/create", formData, {
        headers: {
          "x-auth-token": `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <div className="dashboard-nav">
        <Navigation></Navigation>
        <div className="header-text">
          <Container>
            <Row>
              <p className="heading-about">WELCOME, {user.name}</p>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <div>
        <Container className="fencing-body">
          <Container className="fencing-submit">
            <h1 className="fencing-header">Submit a new post</h1>
            <Row>
              <Col>
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="submit-form"
                  encType="multipart/form-data"
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Title"
                      onChange={titleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Body</Form.Label>
                    <Form.Control placeholder="Body" onChange={bodyChange} />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="image"
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <hr></hr>
          <Container className="fencing-submit">
            <h2 className="fencing-header">Edit/Delete posts</h2>
            <Container>
              <Row xs={1} md={3}>
                {posts.map((p) => (
                  <Col>
                    <Post post={p} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
          <Button variant="dark" type="submit" onClick={onLogoutClick}>
            Logout
          </Button>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
