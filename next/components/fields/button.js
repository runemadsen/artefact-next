import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { color, font, layout } from "../../styles/constants";

const Button = props => {
  let { label, href, type, small, wide } = props;
  let classes = classnames({ small, wide });
  return (
    <button type={type} href={href} className={classes}>
      {label}
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
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string
};

export default Button;
