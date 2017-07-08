import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { color, font, layout } from "../../styles/constants";

const Button = props => {
  let { label, type, small, wide, onClick } = props;
  let classes = classnames({ small, wide });
  return (
    <button type={type} className={classes} onClick={onClick}>
      {label}
      {props.children}
      <style jsx>{`
        button {
          display: inline-block;
          background: none;
          -webkit-appearance: none;
          border-radius: 0;
          font-family: inherit;
          color: inherit;
          font-size: ${font.size.medium};
          padding: .25em .75em;
          border: ${layout.border};
          border-color: ${color.highlight};
          min-width: 10em;
          outline: none;
        }
        button:not(:last-of-type) {
          margin-right: 1em;
        }
        button:hover {
          background-color: ${color.highlight};
          cursor: pointer;
        }
        button:active{
          transform: translate(1px, 1px)
        }
        .small {
          font-size: ${font.size.normal};
          padding: .2em .5em;
        }
        .wide {
          width: 100%;
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
