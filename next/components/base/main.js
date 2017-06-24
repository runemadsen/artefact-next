import React from 'react'

import {layout} from '../../styles/constants'

export default ({ children, className }) => (
  <main className="main">
    { children }
    <style jsx>{`
      .main {
        margin: 0 auto;
        max-width: ${layout.maxWidth};
        padding: 0 ${layout.spaceDouble};
      }
    `}</style>
  </main>
)
