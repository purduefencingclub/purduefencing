import React from "react";
import { Nav, Container, Button, Row, Col, Card, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Fade from "react-reveal";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";
import foilicon from "../images/foilicon2.png";
import sabericon from "../images/sabericon.png";
import epeeicon from "../images/epeeicon.png";
import freshman from "../images/freshman.png";
import sophomore from "../images/sophomore.png";
import junior from "../images/junior.png";
import senior from "../images/senior.png";

import Footer from "../components/Footer";
import rightsaber from "../images/rightsaber1.png";
import rightfoil from "../images/rightfoil.png";

import miranda from "../images/miranda.png";
import kayla from "../images/kayla.jpg";
import lauren from "../images/lauren.png";
import racheal from "../images/racheal.jpg";
import ryan from "../images/ryan.png";
import smeric from "../images/smeric.png";

import Navigation from "../components/Navigation";
import "../styles/index.css";

const Officers = () => (
  <>
    {/* General notes about this page: I like how the cards look. The page has some CSS styling issues that need
    to be addressed, specifically with the grid. Their padding is being adjusted but it's getting messed up on
    mobile. As for the layout of the page, I think it's okay, but I can't tell if it's missing something. */}
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
            <Col>
              <img
                src={rightfoil}
                width="100%"
                className="fencing-divider-img"
              />
            </Col>
            <Col>
              <h2 className="text-center font-weight-bold fencing-divider-subtitle">
                PRIMARY OFFICERS
              </h2>
            </Col>
            <Col>
              <img
                src={rightsaber}
                className="divider-rotate-180 fencing-divider-img"
                width="100%"
              />
            </Col>
          </Row>
          <br />
          <Row xs={1} md={3}>
            {/* xs and md refer to the column number for extra small/medium devices (1 on mobile, 3 on laptop)
          (phones/laptops) which helps spacing on different device widths. 
          Need to add these to other pages */}
            {/* Another idea is to create a card component with props for name, major, weapon, 
          and pic and pass them in here. WOuld probably look wayyyyy cleaner */}
            <Col>
              <Card className="text-center officer-card">
                <Card.Img variant="top" src={kayla} />
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
                        <img src={epeeicon} width="45%" />
                        <p className="officer-info">Epee</p>
                      </Col>
                      <Col>
                        <img src={freshman} width="45%" />
                        <p className="officer-info">Freshman</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center officer-card">
                <Card.Img variant="top" src={miranda} className="officer-img" />
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
                        <img src={foilicon} width="50%" />
                        <p className="officer-info">Foil</p>
                      </Col>
                      <Col>
                        <img src={senior} width="50%" />
                        <p className="officer-info">Senior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center officer-card">
                <Card.Img variant="top" src={racheal} />
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
                        <img src={sabericon} width="45%" />
                        <p className="officer-info">Saber</p>
                      </Col>
                      <Col>
                        <img src={junior} width="50%" />
                        <p className="officer-info">Junior</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center officer-card">
                <Card.Img variant="top" src={lauren} />
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
              <Card className="text-center officer-card">
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
        </Fade>
        <br />
        <br />
        <br />
      </Container>
      <Container className="non-executive">
        <Row>
          <Col>
            <img src={rightfoil} width="100%" className="fencing-divider-img" />
          </Col>
          <Col>
            <h2 className="text-center font-weight-bold fencing-divider-subtitle">
              OTHER OFFICERS
            </h2>
          </Col>
          <Col>
            <img
              src={rightsaber}
              className="divider-rotate-180 fencing-divider-img"
              width="100%"
            />
          </Col>
        </Row>
        <br />
        <Row xs={1} md={3}>
          <Col>
            <Card className="text-center officer-card">
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
                      <p className="officer-info">Epee</p>
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
            <Card className="text-center officer-card">
              <Card.Img variant="top" src={ryan} />
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
            <Card className="text-center officer-card">
              <Card.Img variant="top" src={smeric} />
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
          <Col>
            <Card className="text-center officer-card">
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
            <Card className="text-center officer-card">
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
            <Card className="text-center officer-card">
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
          <Col>
            <Card className="text-center officer-card">
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Alyssa Hirsch</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Coach</Card.Subtitle>
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
            <Card className="text-center officer-card">
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
        <br />
        <br />
        <br />
      </Container>
    </div>
    <Footer></Footer>
  </>
);

export default Officers;
