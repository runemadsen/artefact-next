import React from "react";
import PropTypes from "prop-types";
import { readFileSync } from "fs";
import { join } from "path";

const path = "/../../../node_modules/open-iconic/svg";
let icons = {};
icons["trash"] = readFileSync(join(__dirname, path, "trash.svg"), "utf-8");

const Icon = props => {
  const color = props.color;
  const styles = color ? { fill: color } : null;
  const svg = icons[props.name];
  // const strippedSvg = svg.replace(/<svg.*?>/, "").replace(/<\/svg>/, "");

  return (
    <svg
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      {...props}
      viewBox="0 0 8 8"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};
