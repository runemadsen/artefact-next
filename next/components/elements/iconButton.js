import React from "react";
import PropTypes from "prop-types";
import Icon from "./icon";
import { color } from "../../styles/constants";
const IconButton = props => {
  let { onClick, ...rest } = props;
  return (
    <a className="icon_button" onClick={onClick}>
      <Icon {...rest} />
      <style jsx>{`
        .icon_button {
          display: inline-block;
          cursor: pointer;
          border: none;
          border: 2px solid ${color.white};
          width: 30px;
          height: 30px;
          padding: 5px;
        }
        .icon_button:hover {
          border:2px solid ${color.highlight};
        }
        .icon_button:active {
          background-color: ${color.highlight}
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
