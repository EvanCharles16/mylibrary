import React from "react";
import { connect } from "react-redux";

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
      <Main />
    </div>
  );
};

const mapDispatchToProps = {
  search: getData,
  showAdd,
};

export default connect(null, mapDispatchToProps)(Index);
