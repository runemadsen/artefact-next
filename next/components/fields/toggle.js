import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {layout, color, font} from '../../styles/constants'


const Toggle = (props) => {

  const onChange = (e) => {
    let value = e.target.value
    if( ['true','false'].includes(value) ){
      value = value === 'true'
    }
    props.onChange(props.name, value)
  }

  let options = props.options.map((v,i)=>{
    return (Object.is(v)) ? v : {label:String(v),value:String(v).toLowerCase()}
  })
  let value = props.value || options[0].value

  let toggleClass = classnames(
    "input_container",
    "toggle",
    {"with_label": props.label },
    props.className
    )
  let optionsClasses = classnames(
    "options",
    )
  return (
    <div className={toggleClass}>
      {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
      <div className={optionsClasses}>
        {options.map( ( opt, i)=>{
          let optionClasses = classnames(
              "option",
            {"selected": opt.value == value }
          )

          return (
            <div className={optionClasses} key={`${props.name}-option-${i}`}>
              <input
                name={props.name}
                type="radio"
                value={opt.value}
                id={`${props.name}-option-${i}`}
                checked={opt.value == props.value}
                onChange={onChange}
              />
              <label htmlFor={`${props.name}-option-${i}`}>{opt.label}</label>
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .toggle {
          width: 100%;
          border-bottom: ${layout.border};
        }
        .toggle > label {
          position: absolute;
          max-width: ${layout.labelWidth};
          padding-top: 7px;
        }
        .options {
          position: relative;
          background-color: ${color.background.light};
          display: flex;
          align-items: stretch;
        }
        .with_label > .options{
          padding-left: ${layout.labelWidth};
        }

        .option {
          position: relative;
          z-index: 10;
          /*float: left;*/
          width: 50%;
          height: 38px;
          line-height: 38px;
          text-align: center;
          margin-bottom: -2px;
        }
        .option:before {
          content: " ";
          position: absolute;
          z-index: 1;
          width: 0;
          top: 0;
          height: 100%;
          background-color: ${color.highlight};
          border-bottom-color: ${color.highlight};
          transition: width .2s ease;
        }
        .option:first-child:before {
          right: 0
        }
        .option:last-child:before {
          left: 0
        }
        .option.selected:before {
          width: 100%;
        }
        .option input {display: none;}
        .option label {
          width: 100%;
          position: relative;
          z-index: 100;
          display: block;
          padding: 0;
          height: 100%;
          max-width: none;
          text-align: center;
        }

      `}</style>
    </div>
  )
}

Toggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.bool,PropTypes.number]),
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.array.isRequired,PropTypes.object.isRequired]),
  onChange: PropTypes.func.isRequired,
}
export default Toggle
