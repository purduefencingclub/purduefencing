import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/index.css";
import Post from "./Post";

export default function Posts({ posts }) {
console.log(posts);
var result = [];

for (var i in posts)
	result.push([i, posts[i]]);
 
return (
    <div>
      <Container>
        <Row xs={1} md={3}>
          {posts.map( (p) => (
            <Col>
              <Post post={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
