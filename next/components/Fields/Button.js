import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {color, font, layout} from '../../styles/constants'

class Button extends Component {
  render(){
    let btn;
    let {label, href, type, small, wide, right} = this.props
    let classes = classnames({small, wide, right})
    return(
      <div className={classes}>
        <button type={type}>{label}</button>
        <style jsx>{`
          button {
            display: inline-block;
            background: none;
            -webkit-appearance: none;
            border-radius: 0;
            font-family: inherit;
            color: inherit;
            font-size: ${font.size.medium};
            padding: .25em .75em;
            border: ${layout.border};
            border-color: ${color.highlight}; 
            min-width: 10em;
          }
          button:not(:last-of-type) {
            margin-right: 1em;    
          }
          button:hover {
            background-color: ${color.highlight};
            cursor: pointer;
          }
          .small button {
            font-size: ${font.size.normal};
            padding: .2em .5em;
          } 
          .wide button {
            width: 100%;
          }
          .right {
            text-align: right;
          }
        `}</style>
      </div>)
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string
}

export default Button