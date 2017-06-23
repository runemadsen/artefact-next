import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Status extends Component {
    
  render() {
    let {status} = this.props
    let icon = status == "saved" ? "✔" : "";
    return (
      <div className="status">
        {icon} {status}
      </div>
    )
  }
}


Status.propTypes = {
  status: PropTypes.string.isRequired,
}

