import React from 'react'
import Head from 'next/head'
export default () => (
  <header>
    <Head>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          color: $fontBlack;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 100%;
        }
      `}</style>
    </Head>
  </header>
)
