import React from 'react'

export default ({ children }) => (
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        margin: 0 auto;
        max-width: 1100px;
      }
    `}</style>
  </div>
)
