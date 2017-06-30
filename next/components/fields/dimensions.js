import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Toggle from './toggle'
import Input from './input'

export default class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.keys= ['width','height','depth']
    this.handleOnChangeUnits = this.handleOnChangeUnits.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(name,value){
    this.props.onChange(name, value)
  }
  handleOnChangeUnits(name, val){
    let {props} = this
    if (val == props.dimensionunit) return;
    const conversion = (val == 'in') ? 1 / 2.56 : 2.56;
    const step = (val == 'in') ? .25 : .1;
    this.keys.forEach((k)=>{
      console.log(k, props[k])
      if(props[k]) this.props.onChange(k, Math.round(props[k] * conversion / step) * step )
    })
    this.props.onChange(name, val)
  }
  render() {
    let props = this.props
    let dimensionsClass = classnames(
      "form_dimensions",
      "form_input",
      {"form_input_with_label": props.label },
      )
    let that = this
    return (
      <Input label={props.label}>
        { this.keys.map((name, i)=>{
          return (<Input
            className="quarter"
            key={`${this.props.name}-${name}`}
            name={name}
            type="number"
            step={ props.dimensionunit == "in" ? "0.25" : "1" }
            min="0"
            value={props[name]}
            placeholder={name}
            onChange={that.handleOnChange} />)
        })
        }
        <Toggle className="quarter" name="dimensionunit" value={props.dimensionunit} options={ ['cm','in'] } onChange={this.handleOnChangeUnits} />
        <style jsx>{`
          .group {
            display: block;
          }
          .group :global(.quarter) {
            width: 25%;
          }
        `}</style>
      </Input>
    )
  }
}


Dimensions.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
  dimensionunit: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
