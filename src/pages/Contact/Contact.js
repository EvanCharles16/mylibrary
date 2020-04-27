import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

import foto from "../../img/contact.png";
import bg from "../../img/bg.png";

const Contact = (props) => {
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
    <div>
      <Container>
        <div className="mt-4 mb-4 "></div>
        <Row>
          <Col className="bordered ">
            <img
              src={foto}
              style={{
                width: "100%",
                height: "32rem",
                position: "absolute",
              }}
            />
          </Col>
          <Col>
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
                  <div
                    className="jumbotron bg-light"
                    style={{ border: "2px solid black" }}
                  >
                    <h2 className="contact-2 mb-4 text-center">Contact Us</h2>
                    <Form>
                      <div className="form-group ">
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
                        <label htmlFor="email">Email Address</label>
                        <Field
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label for="Message ">Message</label>
                        <textarea
                          class="form-control"
                          id="Message"
                          rows="3"
                          placeholder="Message"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </Form>
                    <Button
                      variant="primary"
                      block
                      onClick={handleAdd}
                      className="mt-4"
                    >
                      Save
                    </Button>
                  </div>
                );
              }}
            />
          </Col>
        </Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0467299196457!2d104.04891431475377!3d1.1268379991780615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891daa2580a7%3A0x9cb34451d9b2c7a7!2sRuang%20Kreasi!5e0!3m2!1sid!2sid!4v1588003778891!5m2!1sid!2sid"
          width={1050}
          height={400}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          className="mb-4 mt-2"
        />
      </Container>
    </div>
  );
};
export default Contact;
