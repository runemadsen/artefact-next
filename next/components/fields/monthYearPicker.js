import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Select from 'react-select';
import { Creatable } from 'react-select';
import Select from './select';
import {layout, color} from '../../styles/constants'
import classnames from 'classnames'

export default class MonthYearPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onChangeMonth = this.onChangeMonth.bind(this)
    this.onChangeYear = this.onChangeYear.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }
  onChangeMonth(name, value){
    this.props.onChange(this.props.name, this.date.setMonth(value))
  }
  onChangeYear(name,value){
    this.props.onChange(this.props.name, this.date.setYear(value))
  }

  onFocus(){
    this.setState({focus: true})
  }
  onBlur(){
    this.setState({focus: false})
  }
  render() {

    let {label, name, value, options} = this.props
    let today = new Date()
    this.date = typeof value !== "undefined" ? new Date(value) : new Date()
    let selectClass = classnames(
      "form_monthYearPicker",
      "form_select",
      {[`focused`] : this.state.focus}
      )
    let monthClass = classnames(
      "form_monthPicker",
      "split",
      `${name}_month_field`
      )
    let yearClass = classnames(
      "form_monthYearPicker",
      "split",
      `${name}_year_field`
      )
    return (
      <div className={selectClass} onFocus={this.onFocus} onBlur={this.onBlur}>
        <label>{label}</label>
        <div className="group">
          <Select
            className={monthClass}
            name={`${name}_month` }
            clearable={false}
            value={this.date.getMonth()}
            focus={this.state.focus}
            placeholder="month"
            options={makeMonthOptions(today.getMonth())}
            onChange={this.onChangeMonth} />
          <Select
            creatable
            className={yearClass}
            clearable={false}
            focus={this.state.focus}
            isValidNewOption={option=>isFinite(option.label) && parseInt(option.label) > 1899 }
            promptTextCreator={(label)=>`Add ${label}`}
            name={`${name}_year`}
            value={this.date.getFullYear()}
            placeholder="year"
            options={makeYearOptions(today.getFullYear())}
            onChange={this.onChangeYear} />
        </div>
        <style jsx>{`
          .form_monthYearPicker{
            margin-bottom: ${layout.space};
          }
          label{
            position: absolute;
            max-width: ${layout.label.width};
            padding-top: 7px;
          }
          .group {
            padding-left: ${layout.label.width};
            height: ${layout.input.height};
            width: 100%;
            display: flex;
            border-bottom: ${layout.border};
          }
          .focused .group{
            border-bottom-color: ${color.highlight};
          }
          .split:global(){
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

MonthYearPicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

// Internal helpers

function makeYearOptions(thisYear) {
  return Array(61).fill().map((_, i) => {
    let y = thisYear + 1 - i
    return { value: y, label: String(y) }
    } );
}
function makeMonthOptions(thisMonth){
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months.map((k,v)=>{
    return {value: v, label: k  }
  })
}
