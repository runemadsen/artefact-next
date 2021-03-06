import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { layout, color, font } from "../../styles/constants";

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e) {
    let { name } = this.props;
    let { value } = e.target;
    this.props.onChange(name, value);
  }
  onFocus() {
    this.setState({ focus: true });
  }
  onBlur() {
    this.setState({ focus: false });
  }
  render() {
    let { props } = this;
    let type = props.type || "text";
    let textareaClass = classnames(
      props.className,
      "textarea_container",
      {
        [`type_${type}`]: type,
        [`size_${props.size}`]: props.size,
        [`focused`]: this.state.focus
      },
      { with_label: props.label }
    );

    return (
      <div
        className={textareaClass}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
        {
          <textarea
            name={props.name}
            value={props.value}
            rows={props.rows || 3}
            placeholder={props.placeholder}
            onChange={this.onChange}
            autoCapitalize={props.autoCapitalize}
          />
        }
        {props.after ? <span className="after">{props.after}</span> : null}
        {this.state.invalid ? <p>{props.validateMessage}</p> : null}
        <style jsx>{`
          .textarea_container {
            width: 100%;
            margin-bottom: ${layout.space};
          }
          textarea:after{
            content:" ";
            display: table;
            clear: both;
            height: 0;
            font-size: 0;
          }
          label {
            position: absolute;
            z-index: 100;
            max-width: ${layout.label.width};
            padding-top: 7px;
          }
          textarea {
            width: 100%;
            max-width: 100%;
            font-family: inherit;
            font-weight: inherit;
            font-style: inherit;
            font-size: ${font.size.medium};
            outline: none;
            border: none;
            min-height: ${layout.input.height};
            border-bottom: ${layout.border};
          }
          input.with_after{
            width: 80%;
          }
          .group{
            border-bottom: ${layout.border};
            height:${layout.input.height};
            width: 100%;
          }
          .focused textarea, .focused .group {
            border-bottom-color: ${color.highlight};
          }

          .with_label > textarea, .with_label > .group {
            padding-left: ${layout.label.width};
          }
          .group {
            display:flex;
          }
          .invalid input {
            border-bottom-color: red;
          }
          `}</style>
      </div>
    );
  }
}
Textarea.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string
};
