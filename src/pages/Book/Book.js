import React, { useState } from "react";

import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Modal,
  Button,
} from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { add, hideAdd } from "./../../actioncreators/libraries";
// import Index from "../../components/Libraries/Item";

import imgadd from "../../img/add.png";
import pfoto from "../../img/6.png";

import "./Book.css";

const Book = (props) => {
  const [data, setData] = useState({});

  const handleAdd = () => {
    props.add(data);
  };

  const handleClose = () => {
    props.hideAdd();
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="mb-4">
      <Container>
        <Row className="mb-4">
          <Col>
            <div id="portfolio">
              <h1 className="mb-4 mt-4 text-center">Most Popular</h1>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </Col>
        </Row>

        <Row className="pb-4">
          <Col>
            <h1 className="mb-4 mt-5 text-center">New Arrival</h1>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={pfoto} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={pfoto} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={pfoto} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={pfoto} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Modal show={props.isShowAdd} onHide={handleClose}>
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <img
            src={imgadd}
            alt="edit"
            style={{ width: "18rem" }}
            className="mx-auto mt-4"
          />
          <Modal.Body>
            <Formik
              initialValues={{
                bookNumber: "",
                status: "",
                bookTitle: "",
                years: "",
              }}
              validate={(values) => {
                let errors = {};
                if (!values.bookTitle) {
                  errors.bookTitle = (
                    <small className="form-text text-danger">
                      Book Title is required
                    </small>
                  );
                  return errors;
                }
              }}
              render={() => {
                return (
                  <div>
                    <hr />
                    <Form>
                      <div className="form-group">
                        <label for="bookTitle">Title</label>
                        <Field
                          type="text"
                          class="form-control"
                          id="bookTitle"
                          name="bookTitle"
                          placeholder="Book Title"
                        />
                        <ErrorMessage name="bookTitle" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="years">Year</label>
                        <Field
                          type="number"
                          class="form-control"
                          id="years"
                          name="years"
                          placeholder="Years"
                          value={data.years}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="bookNumber">Number</label>
                        <Field
                          type="number"
                          class="form-control"
                          id="bookNumber"
                          name="bookNumber"
                          placeholder="Number"
                          value={data.bookNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                          className="form-control"
                          id="status"
                          name="status"
                        >
                          <option>Available</option>
                          <option>Not Available</option>
                        </select>
                      </div>
                    </Form>
                  </div>
                );
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      {/* <Index /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowAdd: state.libraries.isShowAdd,
  };
};

const mapDispatchToProps = {
  add,
  hideAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
