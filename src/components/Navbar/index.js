import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getData } from "./../../actioncreators/libraries";

const Index = (props) => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      props.search(event.currentTarget.value);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand">EC</Link>

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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/libraries">
              My Library
            </Link>
          </li>
        </ul>
        <form className="form-inline mb-2 mt-2">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            onKeyUp={handleKeyUp}
          />
          <div className="input-group-append">
            <button className="btn btn-success">
              <i className="fas fa-search "></i>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapDispatchToProps = { search: getData };

export default connect(null, mapDispatchToProps)(Index);
