import React, { useState, useContext } from "react";
import { useHistory, Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { loginUser, registerUser } from "../actions/authActions";
import { connect } from "react-redux";

import { Nav, Container, Button, Row, Col, Form } from "react-bootstrap";
import UserContext from "../context/userContext";

import axios from "axios";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import "../styles/index.css";
import { Component } from "react";
import context from "react-bootstrap/esm/AccordionContext";

import Login from "../components/Login";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <script
          src="https://kit.fontawesome.com/a17da011a4.js"
          crossorigin="anonymous"
        ></script>
        <div className="admin-nav">
          <Navigation></Navigation>
          <div className="header-text">
            <Container>
              <Row>
                <p className="heading-about">SPEAK FRIEND AND ENTER</p>
              </Row>
            </Container>
          </div>
        </div>
        <br />
        <div>
          <Container className="fencing-body">
            <Row xs={1} md={1}>
              <Col>
                <Form
                  noValidate
                  onSubmit={this.onSubmit}
                  className="login-form"
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="username"
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect,
                      })}
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
        </div>
        <Footer></Footer>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Admin);
