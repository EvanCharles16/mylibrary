import React from "react";
import { connect } from "react-redux";
import buku from "../../img/buku.webp";
import banner from "../../img/banner.png";

import { getData, showAdd } from "./../../actioncreators/libraries";

import Main from "./Main";

const Index = (props) => {
  const showAdd = () => {
    props.showAdd();
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      props.search(event.currentTarget.value);
    }
  };

  return (
    <div className="container">
      <h2
        className="text-center mb-4 mt-4 bg-light "
        style={{
          position: "relative",
          border: "2px solid black",
          width: "18rem",
          marginLeft: "24rem",
        }}
      >
        My Library{" "}
      </h2>
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={buku}
              className="card-img-top"
              alt="buku"
              style={{ border: "2px solid black" }}
            />
            <div className="card-body" style={{ border: "1px solid black" }}>
              <h5 className="card-title">Add Book</h5>
              <button className="btn btn-primary" onClick={showAdd}>
                <i class="fas fa-user-plus"></i>
              </button>

              <div className="form-inline mb-2 mt-2">
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
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img src={banner} alt="banner" style={{ width: "26rem" }} />
        </div>
      </div>

      <Main />
    </div>
  );
};

const mapDispatchToProps = {
  search: getData,
  showAdd,
};

export default connect(null, mapDispatchToProps)(Index);
