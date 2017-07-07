import React, { Component } from "react";
import ListItem from "./listItem";

const List = props => {
  console.log(props.works);
  return (
    <div className="list">
      {props.works.map((w, i) => {
        return <ListItem key={`work-${i}`} work={w.node} />;
      })}
    </div>
  );
};

export default List;
