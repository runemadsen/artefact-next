import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import { color } from "../../styles/constants";
const IconButton = props => {
  let { onClick, ...rest } = props;
  let label = props.children || props.label;
  return (
    <a className="icon_button" onClick={onClick}>
      <Icon {...rest} />
      {label ? <span className="label">{label}</span> : null}
      <style jsx>{`
        .icon_button {
          display: inline-block;
          cursor: pointer;
          border: none;
          border: 2px solid ${color.white};
          min-width: 30px;
          height: 30px;
          padding: 5px;
          white-space: nowrap;
        }
        .icon_button:hover {
          border:2px solid ${color.highlight};
        }
        .icon_button:active {
          background-color: ${color.highlight}
        }
        .label {
          margin-left: 5px;
          display: inline-block;
          transform: translateY(-1px);
        }
      `}</style>

    </a>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
