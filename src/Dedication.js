import React from "react";
import "./App.css";

const Dedication = props => {
  return (
    <div className="dedication">
      <div>{props.message}</div>
      <div>~{props.name}</div>
    </div>
  );
};

export default Dedication;
