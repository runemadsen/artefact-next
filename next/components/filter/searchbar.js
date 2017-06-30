import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input placeholder="Search" />
        <style jsx>{`
          .searchbar {
            input {
              width: 100%;
              font-family: inherit;
              font-size: inherit;
              padding: .2em .5em;
            }
          }
        `}</style>
      </div>
    );
  }
}

Searchbar.propTypes = {};
export default Searchbar;
