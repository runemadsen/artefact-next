import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

export default class MultiInput extends Component {
    
  onChange(e){
    // console.log(e.target, e.target.value, e.target.name)
    this.props.onChange(e.target.value, e.target.name)
  }
  render() {
    let {label, fields} = this.props
    
    let classes = classnames(
      "form_input_multi", 
      "form_input",
      `form_input_multi_${this.props.fields.length}`,
      {"form_input_with_label": label },
      )
    return (
      <div className={classes}>
        {label ? <label>{label}</label> : null}
        <div className="form_input_group">{
          fields.map((f, i)=>{
            return (<input 
              className={`input-split-${this.props.fields.length}`}
              key={f.name}
              ref={f.name}
              name={f.name}
              type={f.type}
              value={f.value} 
              placeholder={f.placeholder}
              onChange={(e)=>this.onChange(e)} 
              {...f}
              />)
          })
        }
        </div>
      </div>
    )
  }
}

MultiInput.propTypes = {
  fields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
