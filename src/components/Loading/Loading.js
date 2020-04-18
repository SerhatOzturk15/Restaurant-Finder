import React from "react";
import "./Loading.scss";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Spinner className="spinner-element" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loading;
