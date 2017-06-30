import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { Creatable } from "react-select";
import classnames from "classnames";

import { color, layout, font } from "../../styles/constants";

import reactselectstyles from "../../../node_modules/react-select/dist/react-select.css";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e) {
    console.log(e.value);
    this.props.onChange(this.props.name, e.value);
  }
  onFocus() {
    this.setState({ focus: true });
  }
  onBlur() {
    this.setState({ focus: false });
  }
  render() {
    let props = this.props;
    let options = props.options.map((v, i) => {
      return v instanceof Object ? v : { label: v, value: v.toLowerCase() };
    });
    let selectClass = classnames("form-select", {
      creatable: props.creatable,
      "with-label": props.label,
      focused: this.state.focus || this.props.focus
    });
    return (
      <div className={selectClass} onFocus={this.onFocus} onBlur={this.onBlur}>
        <label>{props.label}</label>
        {props.creatable
          ? <Creatable
              name={props.name}
              value={props.value}
              placeholder={props.placeholder}
              options={options}
              clearable={props.clearable}
              onChange={this.onChange}
            />
          : <ReactSelect
              name={props.name}
              value={props.value}
              placeholder={props.placeholder}
              options={options}
              clearable={props.clearable}
              onChange={this.onChange}
            />}
        <style jsx>{`
          .form-select{
            width: 100%;
          }
          .form-select label{
              position: absolute;
              max-width: ${layout.label.width};
              padding-top: 7px;
            }

        `}</style>
        <style jsx global>{reactselectstyles}</style>
        {/*  overrides */}
        <style jsx global>{`
          .form-select {
            width: 100%;
          }

          .form-select:after{
              content:" ";
              display: table;
              clear: both;
              height: 0;
              font-size: 0;
            }
            .form-select.with-label .Select{
              padding-left: ${layout.label.width};
            }
          .form-select  .Select {
             margin-bottom: ${layout.space};
             width: 100%;
          }

          .Select {
            border-bottom: ${layout.border};
            font-size: ${font.size.medium};
            outline: none;
          }
          .Select.is-focused {
            border-bottom-color: ${color.highlight};
          }

          .Select-menu-outer{
            z-index: 100;
          }
          .Select-control{
            border-radius: 0;
            border: none;
            box-shadow: none!important;
          }
          .Select-placeholder, .Select-input, .Select-value {
            padding-left: 0 !important;
            line-height: 40px !important;
          }
          .Select-placeholder, .Select--single > .Select-control .Select-value {
            line-height: 40px;
          }

          .Select-option.is-focused{
            background-color: transparent;
            border-bottom: 2px solid ${color.highlight};
          }
          .Select-option.is-selected {
            background-color: ${color.highlight};
          }

          .Select-arrow {
            border-top-color: ${color.text};
          }
          .Select-arrow {
            border-color: ${color.text} transparent transparent;
            border-width: 10px 7px 0px;
          }
          .is-open .Select-arrow,
          .Select-arrow-zone:hover > .Select-arrow {
            border-top-color: ${color.highlight};
          }
          .is-open > .Select-control .Select-arrow {
            top: -2px;
            border-color: transparent transparent ${color.text};
            border-width: 0 7px 10px;
          }
        `}</style>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
