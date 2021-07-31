import React from "react";
import { Nav, Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../image1.jpeg";
import divider from "../divider1.png";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Officers = () => (
  <>
    <script
      src="https://kit.fontawesome.com/a17da011a4.js"
      crossorigin="anonymous"
    ></script>
    <div className="officer-nav">
      <Navigation></Navigation>
      <div className="header-text">
        <Container>
          <Row>
            <p className="heading-about">OFFICERS</p>
            <p className="officer-date">2021 - 2022</p>
          </Row>
        </Container>
      </div>
    </div>
    <br />
    <div>
      <Container className="executive">
        <Fade>
          <Row>
            <h2 className="text-center font-weight-bold">BOARD OFFICERS</h2>
          </Row>
          <br />
          <Row xs={1} md={3}>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Miranda Carter</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    President
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-dna fa-2x"></i>
                        <p className="officer-info">Microbiology</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Racheal Fisher</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Vice President
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-atom fa-2x"></i>
                        <p className="officer-info">Chemistry</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Junior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Kayla Zemek</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Treasurer
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-hotel fa-2x"></i>
                        <p className="officer-info">Hospitality</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Junior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <h2 className="text-center font-weight-bold">EXECUTIVE OFFICERS</h2>
          </Row>
          <br />
          <div className="d-flex justify-content-center">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }} className="text-center">
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Lauren Feng</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Safety Officer
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <Row>
                        <Col>
                          <i class="fas fa-cogs fa-2x"></i>
                          <p className="officer-info">Engineering</p>
                        </Col>
                        <Col>
                          <i class="fas fa-khanda fa-2x"></i>
                          <p className="officer-info">Foil</p>
                        </Col>
                        <Col>
                          <i class="fas fa-user fa-2x"></i>
                          <p className="officer-info">Senior</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="text-center">
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Kaitlyn Cooper</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Community Service Officer
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <Row>
                        <Col>
                          <i class="fas fa-dna fa-2x"></i>
                          <p className="officer-info">Genetics</p>
                        </Col>
                        <Col>
                          <i class="fas fa-khanda fa-2x"></i>
                          <p className="officer-info">Saber</p>
                        </Col>
                        <Col>
                          <i class="fas fa-user fa-2x"></i>
                          <p className="officer-info">Senior</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Fade>
        <br />
        <br />
        <br />
      </Container>
      <Container className="non-executive">
        <Fade>
          <Row>
            <h2 className="text-center">OTHER OFFICERS</h2>
          </Row>
          <br />
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Jada Johnson</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Fundraising
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-dna fa-2x"></i>
                        <p className="officer-info">Genetics</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Ryan Everhart</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Armorer
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-dna fa-2x"></i>
                        <p className="officer-info">Genetics</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Eric Wang</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Head Webmaster
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-laptop-code fa-2x"></i>
                        <p className="officer-info">CSE</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <div>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }} className="text-center">
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Evan Heiss</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Web Master
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <Row>
                        <Col>
                          <i class="fas fa-dna fa-2x"></i>
                          <p className="officer-info">Genetics</p>
                        </Col>
                        <Col>
                          <i class="fas fa-khanda fa-2x"></i>
                          <p className="officer-info">Foil</p>
                        </Col>
                        <Col>
                          <i class="fas fa-user fa-2x"></i>
                          <p className="officer-info">Sophomore</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="text-center">
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Sasha Thomas</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Web Master
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <Row>
                        <Col>
                          <i class="fas fa-server fa-2x"></i>
                          <p className="officer-info">Cybersecurity</p>
                        </Col>
                        <Col>
                          <i class="fas fa-khanda fa-2x"></i>
                          <p className="officer-info">Saber</p>
                        </Col>
                        <Col>
                          <i class="fas fa-user fa-2x"></i>
                          <p className="officer-info">Junior</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="text-center">
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Maria Soare</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Travel Coordinator
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <Row>
                        <Col>
                          <i class="fas fa-dna fa-2x"></i>
                          <p className="officer-info">Genetics</p>
                        </Col>
                        <Col>
                          <i class="fas fa-khanda fa-2x"></i>
                          <p className="officer-info">Foil</p>
                        </Col>
                        <Col>
                          <i class="fas fa-user fa-2x"></i>
                          <p className="officer-info">Senior</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Fade>
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Alyssa Hirsch</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Coach
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-dna fa-2x"></i>
                        <p className="officer-info">Genetics</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="text-center">
                <Card.Img variant="top" src={image1} />
                <Card.Body>
                  <Card.Title>Erika Kvam</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Advisor
                  </Card.Subtitle>
                  <br />
                  <Card.Text>
                    <Row>
                      <Col>
                        <i class="fas fa-dna fa-2x"></i>
                        <p className="officer-info">Genetics</p>
                      </Col>
                      <Col>
                        <i class="fas fa-khanda fa-2x"></i>
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <i class="fas fa-user fa-2x"></i>
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default Officers;
