import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Table, Row, Col } from "react-bootstrap";

import { getData } from "./../../actioncreators/libraries";

import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";
import Item from "./Item";
import bg from "../../img/bg.png";

import banner from "../../img/banner.png";
import kiri from "../../img/kiri.png";
import kanan from "../../img/kanan.png";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData();
  }, []);

  return (
    <div>
      <div style={{ position: "absolute", top: "7%", left: "0" }}>
        <img
          src={bg}
          style={{
            width: "100%",
            height: "30rem",
            position: "relative",
          }}
        />
        <div style={{ position: "absolute", top: "20%", left: "24%" }}>
          <h1 style={{ borderBottom: "2px solid black", width: "30rem" }}>
            " Welcome To My Library "
          </h1>
          <h5 className="mt-4" style={{ position: "absolute" }}>
            Education is what remains after one has forgotten what one has
            learned in School
          </h5>
        </div>
        <img
          src={banner}
          alt="banner"
          style={{
            width: "26rem",
            position: "absolute",
            top: "10%",
            left: "56%",
          }}
        />
      </div>
      <Row className="fixed-bottom  ">
        <Col md={2}>
          <img src={kiri} style={{ width: "20rem", position: "absolute" }} />
        </Col>
        <Col md={8}>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <td>Book Title</td>
                <td>Year</td>
                <td>Book Number</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item, index) => (
                <Item key={index} data={item} />
              ))}
            </tbody>
          </Table>
          <Add />
          <Delete />
          <Edit />
        </Col>
        <Col md={2}>
          <img src={kanan} style={{ width: "20rem" }} />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.libraries.data,
  };
};
const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
