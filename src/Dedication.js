import React from "react";

const Dedication = props => {
  return (
    <div>
      <div>{props.message}</div>
      <div>~{props.name}</div>
    </div>
  );
};

export default Dedication;
