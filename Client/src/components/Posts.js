import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/index.css";
import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div>
      <Container>
        <Row xs={1} md={3}>
          {posts.map((p) => (
            <Col>
              <Post post={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
