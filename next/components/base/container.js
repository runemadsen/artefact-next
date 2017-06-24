import React from 'react'
import classnames from 'classnames'

import {layout} from '../../styles/constants'

export default ({ children, className, right }) => {
  let classes = classnames(
    "container",
    className,
    {right}
  )
  return (
    <div className={classes}>
      { children }
      <style jsx>{`
        .right {
          text-align: right;
        }
      `}</style>
    </div>
  )
}
