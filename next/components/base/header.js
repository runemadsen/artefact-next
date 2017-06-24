import React from 'react'
import Head from 'next/head'

import baseStyles from '../../styles/base'

import Menu from '../base/menu'

export default ({viewer, title}) => (
  <header>
    <Head>
      <title>{title ? title : "Artefact"}</title>
      <link rel="icon" type="image/png" href="/static/favicon.png" />
    </Head>
    <style jsx global>{baseStyles}</style>
    <Menu viewer={viewer} />
  </header>
)
