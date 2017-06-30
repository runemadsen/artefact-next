import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Status = (props) => {
  let icon = props.status == "saved" ? "✔" : "";
  return (
    <div className="status">
      {icon} {props.status}
      <style jsx>{`
        .status{
          text-align: right;
        }
      `}</style>
    </div>
  )
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Status
