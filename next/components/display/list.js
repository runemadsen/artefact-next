import React, { Component } from "react";

const List = props => {
  return (
    <div className="list">
      {props.children}
    </div>
  );
};

export default List;
