import React from 'react'

export default ({ children, className }) => (
  <div className={`container ${className ? className : ''}`}>
    { children }
    <style jsx>{`
      .container {
        margin: 0 auto;
        max-width: 1100px;
      }
    `}</style>
  </div>
)
