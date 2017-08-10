import React, { Component } from "react";
import PropTypes from "prop-types";
import { layout } from "../../styles/constants";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", tokens: [], filters: [] };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    let cursor = Math.max(e.target.selectionStart, e.target.selectionEnd);
    let existingFilters = this.state.filters;
    let { filters, tokens } = this.getFiltersAndTokens(e.target.value, cursor);
    // es6 way of uniq
    filters = Array.from(new Set(filters.concat(existingFilters)));
    this.setState({
      value: filters.join(" ") + " " + tokens.join(" "),
      filters,
      tokens,
      cursor,
      cursorStart: e.target.selectionStart,
      cursorEnd: e.target.selectionEnd
    });
  }
  getFiltersAndTokens(value, cursor) {
    let tokens = [],
      filters = [],
      pos = 0,
      newpos = 0;
    value.split(" ").forEach((token, i) => {
      newpos = pos + token.length + 1;
      let isActiveToken = pos < cursor && newpos > cursor;
      pos = newpos;
      if (/\S+:\S+/.test(token) && !isActiveToken) {
        filters.push(token);
      } else {
        tokens.push(token);
      }
    });
    return { filters, tokens };
  }

  render() {
    return (
      <div className="searchbar">
        <div className="filters">
          {this.state.filters.map((filter, i) => {
            let type = filter.split(":").unshift();
            return <span key={i} className={`filter filter-`}>{filter}</span>;
          })}
        </div>
        <input
          placeholder="Search"
          value={this.state.tokens.join(" ")}
          onChange={this.handleOnChange}
        />
        <style jsx>{`
          .searchbar {
            display: flex;
          }
          .filter {
            display: inline-block;
            line-height: ${layout.input.height};
            height: ${layout.input.height};
            padding: 0 5px;
            margin-right: 5px;
            background: rgb(240,240,240);
            border-radius: 2px;
            border: 1px solid rgb(235,235,235);

          }
          input {
            width: 100%;
            font-family: inherit;
            font-size: inherit;
            padding: .2em .5em;
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

Searchbar.propTypes = {};
export default Searchbar;
