import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { add, hideAdd } from "./../../actioncreators/libraries";

import imgadd from "../../img/add.png";

const Add = (props) => {
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
                    <select className="form-control" id="status" name="status">
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);
