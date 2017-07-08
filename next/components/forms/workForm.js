import React, { Component } from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

import Input from "../fields/input";
import MonthYearPicker from "../fields/monthYearPicker";
import Select from "../fields/select";
import Dimensions from "../fields/dimensions";
import Toggle from "../fields/toggle";

export default class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(name, value) {
    this.props.onChange(name, value);
    // this is temporary. is it?
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render() {
    let work = Object.assign({}, this.props.work, this.state);
    return (
      <form>
        <Input
          label="title"
          name="title"
          value={work.title}
          placeholder="Artwork's Title"
          onChange={this.handleOnChange}
        />
        <MonthYearPicker
          label="creation date"
          value={work.createdat}
          name="createdat"
          onChange={this.handleOnChange}
        />
        <Select
          label="artist"
          name="artist"
          value={work.artist}
          placeholder="Artist"
          onChange={this.handleOnChange}
          options={["Martin", "Rune", "Alex"]}
        />
        <Select
          label="medium"
          name="medium"
          value={work.medium}
          placeholder="Oil, Metal,..."
          onChange={this.handleOnChange}
          creatable
          options={["Oil", "Metal", "Digital"]}
        />
        <Dimensions
          label="dimensions"
          name="dimensions"
          width={work.width}
          height={work.height}
          depth={work.depth}
          dimensionunit={work.dimensionunit}
          onChange={this.handleOnChange}
        />
        <Input
          label=" "
          name="dimensions_words"
          value={work.dimensions_words}
          placeholder="Or describe it in words"
          onChange={this.handleOnChange}
        />

        <Toggle
          name="editioned"
          label="editioned"
          value={work.editioned}
          options={[
            { value: false, label: "Single" },
            { value: true, label: "Editioned" }
          ]}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

WorkForm.propTypes = {
  work: PropTypes.object,
  onChange: PropTypes.func.isRequired
};
