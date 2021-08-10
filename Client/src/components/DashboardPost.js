import React, { useState } from "react";
import {
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import image1 from "../image1.jpeg";
import axios from "axios";

import "../styles/index.css";

let token;
const DashboardPost = ({ post }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [editFile, setEditFile] = useState();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  try {
    token = localStorage.getItem("jwtToken").split(" ")[1];
  } catch (err) {
    console.log("Token doesn't exist!");
  }
  const handleDelete = (e) => {
    console.log(token);
    e.preventDefault();
    axios
      .delete(`/api/posts/${post._id}`, {
        headers: {
          "x-auth-token": `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleEdit = (e) => {
    console.log("asdf");
    const formDataEdit = new FormData();

    formDataEdit.append("title", title);
    formDataEdit.append("body", body);
    formDataEdit.append("image", editFile);
    console.log(formDataEdit.title);
    e.preventDefault();
    axios
      .put(`/api/posts/${post._id}`, formDataEdit, {
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
      <div>
        <Card>
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <Button variant="primary" onClick={handleShow}>
                Edit
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  *Make sure to update every field before you hit submit. sorry
                  <Form
                    noValidate
                    onSubmit={handleEdit}
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
                        onChange={(e) => setEditFile(e.target.files[0])}
                        name="image"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleEdit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>{" "}
              <Button onClick={handleDelete} variant="dark">
                Delete
              </Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default DashboardPost;
