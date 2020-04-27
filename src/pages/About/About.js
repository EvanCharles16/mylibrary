import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import about from "../../img/aboutt.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="background-about">
        <img src={about} alt="about" style={{ position: "absolute" }} />
        <h1 className="mt-4 text-center relative  ">About Us</h1>
        <Container className="about">
          <Row>
            <Col md={5} sm={12}></Col>
            <Col
              md={7}
              sm={12}
              className="text mt-3 bg-light "
              style={{ opacity: "0.8", height: "22rem" }}
            >
              <h2 className="ml-4 pt-3 mt-4 text-left">Who we are</h2>
              <h3>
                <h3 className="ml-3 pt-4">EC - Library </h3>
                <p className="ml-3 pt-3 text-justify">
                  Our people are librarians with excellent professional,
                  academic and often technical skills, and wide ranging
                  experience relevant to the academic environment we work
                  within. We are passionate about helping students develop and
                  succeed.
                </p>
              </h3>
            </Col>
          </Row>

          <hr className="mt-5" />

          <Row className="mb-4">
            <Col>
              <div id="portfolio">
                <div className="services text-center mb-5 mt-5 pt-4">
                  <h1>Our Services</h1>
                </div>
                <CardDeck className="text-center">
                  <Card>
                    <Card.Img variant="top" />
                    <i className="fa fa-book fa-4x mt-4"></i>
                    <Card.Body>
                      <Card.Title className="mt-3">E-Books</Card.Title>
                      <Card.Text className="mt-4">
                        An electronic version of a printed book that can be read
                        on a computer.
                      </Card.Text>
                      <button className="btn btn-outline-danger">
                        Learn More
                      </button>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i className="fas fa-gift fa-4x mt-4"></i>
                    <Card.Body>
                      <Card.Title className="mt-3">Audio Book</Card.Title>
                      <Card.Text className="mt-4">
                        An Audiocassete or CD recording of a reading of a book,
                        typically a novel.
                      </Card.Text>
                      <button className="btn btn-outline-secondary">
                        Learn More
                      </button>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i className="far fa-copy fa-4x mt-4"></i>
                    <Card.Body>
                      <Card.Title className="mt-3">Magazine</Card.Title>
                      <Card.Text className="mt-4">
                        A periodical publication containing article and
                        illustrations information.
                      </Card.Text>
                      <button className="btn btn-outline-success">
                        Learn More
                      </button>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i className="fas fa-calculator fa-4x mt-4"></i>
                    <Card.Body>
                      <Card.Title className="mt-3">Tean & Kids</Card.Title>
                      <Card.Text className="mt-4">
                        The Years of a person's age from 13 to 19 and are the
                        kids and teenager.
                      </Card.Text>
                      <button className="btn btn-outline-primary">
                        Learn More
                      </button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;
