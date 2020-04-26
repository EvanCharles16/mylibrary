import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { edit, hideEdit } from "./../../actioncreators/libraries";

import imgedit from "../../img/edit.png";

const Edit = (props) => {
  const [data, setData] = useState({
    bookNumber: props.data.bookNumber,
    status: props.data.status,
    bookTitle: props.data.bookTitle,
    years: props.data.years,
  });

  const handleEdit = () => {
    props.edit(data);
  };

  const handleClose = () => {
    props.hideEdit();
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setData(props.data);
    console.log(props.data);
  }, [props.data]);

  return (
    <Modal show={props.isShowEdit} onHide={handleClose}>
      <Modal.Header closeButton className="bg-warning text-white">
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <img
        src={imgedit}
        alt="edit"
        style={{ width: "18rem" }}
        className="mx-auto mt-4"
      />
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="bookTitle">Title</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="bookNumber"
            name="bookNumber"
            value={data.bookNumber}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="status">Status</label>
          <select className="form-control" id="status">
            <option>Available</option>
            <option>Not Available</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="warning" onClick={handleEdit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.libraries.dataEdit,
    isShowEdit: state.libraries.isShowEdit,
  };
};

const mapDispatchToProps = {
  edit,
  hideEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
