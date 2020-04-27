import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

import { getData } from "./../../actioncreators/libraries";

const Index = (props) => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      props.search(event.currentTarget.value);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ml-4">
          <h3>EC's Library</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5 ">
            <li className="nav-item active link">
              <Link className="nav-link mr-4" to="/libraries">
                <h4>Home</h4>
              </Link>
            </li>
            <li className="nav-item active link">
              <Link className="nav-link mr-4" to="/about">
                <h4>About</h4>
              </Link>
            </li>
            <li className="nav-item active link">
              <Link className="nav-link mr-4" to="/book">
                <h4>Our Books</h4>
              </Link>
            </li>
            <li className="nav-item active link">
              <Link className="nav-link mr-4" to="/contact">
                <h4>Contact</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapDispatchToProps = { search: getData };

export default connect(null, mapDispatchToProps)(Index);
