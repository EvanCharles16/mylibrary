import React from "react";

import { connect } from "react-redux";

import {
  deleteData,
  showDelete,
  showEdit,
} from "./../../actioncreators/libraries";

const Item = (props) => {
  const handleClick = () => {
    props.showDelete(props.data);
  };

  const handleClickUbah = () => {
    props.showEdit(props.data);
  };

  return (
    <tr>
      <td>{props.data.bookTitle}</td>
      <td>{props.data.years}</td>
      <td>{props.data.bookNumber}</td>
      <td>{props.data.status} </td>
      <td>
        <button className="btn btn-warning" onClick={handleClickUbah}>
          <i class="far fa-edit">Edit</i>
        </button>
        <button className="btn btn-danger" onClick={handleClick}>
          <i class="fas fa-trash" style={{ color: "black" }}>
            Delete
          </i>
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = { deleteData, showDelete, showEdit };

export default connect(null, mapDispatchToProps)(Item);
