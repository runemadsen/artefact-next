import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
  const color = props.color;
  const styles = color ? { fill: color } : null;
  const use = `<use xlink:href="/static/open-iconic.svg#${props.name}" />`;
  return (
    <svg
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 8"
      dangerouslySetInnerHTML={{ __html: use }}
    />
  );
};
export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};
