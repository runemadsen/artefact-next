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

  handleOnChange(e){
    let loc = [this.props.name,e.name]
    this.props.onChange(e.value, loc)
  }
  handleOnChangeUnits(val, name){
    let {value} = this.props
    if (val == value.units) return;

    const conversion = (val == 'in') ? 1 / 2.56 : 2.56;
    const step = (val == 'in') ? 1 : 0;
    let newValue = Object.assign({},value)
    newValue['units'] = val
    this.keys.forEach((k)=>{
      newValue[k] = newValue[k] ? _.round(newValue[k] * conversion, step) : newValue[k];
    })
    this.props.onChange(newValue, this.props.name)
  }
  render() {
    let {label, name, value} = this.props
    let dimensionsClass = classnames(
      "form_dimensions",
      "form_input",
      {"form_input_with_label": label },
      )
    return (
      <Input label={label}>
        { this.keys.map((n, i)=>{
          return (<Input
            className="quarter"
            key={`${this.props.name}-${n}`}
            name={n}
            type="number"
            step={ value.units == "in" ? "0.25" : "1" }
            min="0"
            value={value[n]}
            placeholder={n}
            onChange={(e)=>this.handleOnChange(e.target)} />)
        })
        }
        <Toggle className="quarter" name="units" value={value.units} options={ ['cm','in'] } onChange={this.handleOnChangeUnits} />
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
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
