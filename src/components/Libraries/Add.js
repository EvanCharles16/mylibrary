import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { add, hideAdd } from "./../../actioncreators/libraries";

const Add = (props) => {
  const [data, setData] = useState({
    bookNumber: 0,
    status: false,
    bookTitle: "",
    years: 1990,
  });

  const handleAdd = () => {
    props.add(data);
  };

  const handleClose = () => {
    props.hideAdd();
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.currentTarget;
    if (type === "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
      console.log(checked);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  return (
    <Modal show={props.isShowAdd} onHide={handleClose}>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label for="bookTitle">Title</label>
          <input
            type="text"
            class="form-control"
            id="bookTitle"
            name="bookTitle"
            value={data.bookTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="years">Year</label>
          <input
            type="number"
            class="form-control"
            id="years"
            name="years"
            value={data.years}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookNumber">Number</label>
          <input
            type="number"
            class="form-control"
            id="bookNumber"
            name="bookNumber"
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
