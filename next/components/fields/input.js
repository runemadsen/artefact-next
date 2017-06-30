import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {layout, color, font} from '../../styles/constants'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }
  onChange(e){
    let {name, validate} = this.props
    let {value} = e.target
    if(validate && !new RegExp(validate).test(value)){
      this.setState({invalid: true})
    } else {
      this.setState({invalid: false})
    }
    this.props.onChange(name, value)
  }
  onFocus(){
    this.setState({focus: true})
  }
  onBlur(){
    this.setState({focus: false})
  }
  render() {
    let {className, children, label, name, value, type, placeholder, step, size, autoCapitalize} = this.props
    type = type || "text"
    let inputClass = classnames(
      className,
      "input_container",
      {
        [`type_${type}`] : type,
        [`size_${size}`] : size,
        [`invalid`] : this.state.invalid,
        [`focused`] : this.state.focus
      },
      {"with_label": label },
    )

    return (
      <div className={inputClass} onFocus={this.onFocus} onBlur={this.onBlur}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        {children  ?
          <div className="group">{children}</div>
        :
        <input
          name={name}
          type={type}
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange}
          autoCapitalize={autoCapitalize}

        />
        }
        <style jsx>{`
          .input_container {
            width: 100%;
            margin-bottom: ${layout.space};
          }
          .input:after{
            content:" ";
            display: table;
            clear: both;
            height: 0;
            font-size: 0;
          }
          label {
            position: absolute;
            max-width: ${layout.label.width};
            padding-top: 7px;
          }
          input {
            width: 100%;
            font-family: inherit;
            font-weight: inherit;
            font-style: inherit;
            font-size: ${font.size.medium};
            outline: none;
            border: none;
            height: ${layout.input.height};
            border-bottom: ${layout.border};
          }
          .group{
            border-bottom: ${layout.border};
            height:${layout.input.height};
            width: 100%;
          }
          .focused input, .focused .group {
            border-bottom-color: ${color.highlight};
          }

          .with_label > input, .with_label > .group {
            padding-left: ${layout.label.width};
          }
          .group {
            display:flex;
          }
          .invalid input {
            border-bottom-color: red;
          }
        `}
        </style>
      </div>
    )
  }
}
Input.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
