import React from 'react'
import Head from 'next/head'

import baseStyles from '../../styles/base'

export default () => (
  <header>
    <Head>
      <style jsx global>{baseStyles}</style>
    </Head>
  </header>
)
