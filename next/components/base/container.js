import React from "react";
import classnames from "classnames";

import { layout } from "../../styles/constants";

const Container = ({ children, className, right, justify }) => {
  let classes = classnames("container", className, { right });
  if (right) justify = "flex-end";
  return (
    <div
      className={classes}
      style={{
        justifyContent: justify
      }}
    >
      {children}
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Container;
