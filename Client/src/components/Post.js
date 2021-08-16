import React from "react";
import {
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import image1 from "../images/image1.jpeg";

import "../styles/index.css";

export default function Post({ post }) {
  const path = "/post/" + post._id;

  const maxCharacterLength = 60;
  //var trimmedBody = post.body.substr(0, maxCharacterLength);

  //trimmedBody = trimmedBody.substr(
  //  0,
  //  Math.min(trimmedBody.length, trimmedBody.lastIndexOf(" "))
  //);
  //trimmedBody += "...";
  const imagePath = `/images/${post.image}`;

  return (
    <>
      <div>
        <Card>
          <LinkContainer to={path}>
            <Card.Img variant="top" src={imagePath} />
          </LinkContainer>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.body}
              <br />
              <br />
              <br />
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            {new Date(post.createdAt).toDateString()}
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
