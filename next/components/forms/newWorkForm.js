import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Input from "../fields/input";
import MonthYearPicker from "../fields/monthYearPicker";
import Select from "../fields/select";
import Dimensions from "../fields/dimensions";
import Toggle from "../fields/toggle";

export default class NewWorkForm extends Component {

  constructor(props) {
    super(props);
    this.state = props.work;
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
    this.props.onChange(name, value);
  }

  render() {
    return (
      <form>
        <Input
          label="title"
          name="title"
          value={this.state.title}
          placeholder="Artwork's Title"
          onChange={this.handleOnChange}
        />
        <MonthYearPicker
          label="creation date"
          value={this.state.workCreatedAt}
          name="workCreatedAt"
          onChange={this.handleOnChange}
        />
        <Select
          label="artist"
          name="artistId"
          value={this.state.artistId}
          placeholder="Artist"
          onChange={this.handleOnChange}
          options={this.props.contacts.map(c => ({ label: c.name, value: c.id })) }
        />
        <Select
          label="medium"
          name="medium"
          value={this.state.medium}
          placeholder="Oil, Metal,..."
          onChange={this.handleOnChange}
          creatable
          options={["Oil", "Metal", "Digital"]}
        />
        <Dimensions
          label="dimensions"
          name="dimensions"
          width={parseInt(this.state.width) || null}
          height={parseInt(this.state.height) || null}
          depth={parseInt(this.state.depth) || null }
          dimensionunit={this.state.dimensionUnit}
          onChange={this.handleOnChange}
        />
        <Input
          label=" "
          name="dimensions_words"
          value={this.state.dimensionText}
          placeholder="Or describe it in words"
          onChange={this.handleOnChange}
        />

        <Toggle
          name="editioned"
          label="editioned"
          value={this.state.editioned}
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

NewWorkForm.propTypes = {
  work: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
