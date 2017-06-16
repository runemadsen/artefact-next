import React from 'react'
import Link from 'next/link'
import Container from './container'

export default (props) => {

  return (<nav>
    <Container>
      <Link href="/about"><a id="logo">Artefact</a></Link>
      { props.viewer ? <Link href="/works"><a>Works</a></Link> : null }
      { props.viewer ? <Link href="/people"><a>People</a></Link> : null }
      { props.viewer ? <Link href="/user"><a>Profile</a></Link> : null }
      { props.viewer ? <Link href="/users/logout"><a>Sign out</a></Link> : null }
    </Container>
    <style jsx>{`
      nav {
        border-bottom: 1px solid $grayLight;
        height: 75px;
      }
      nav a {
        margin-right: 1em;
        display: inline-block;
        text-decoration: none;
      }
      nav #logo {
        color: #333;
        margin-top: 0.55em;
        font-size: 2em;
        font-weight: bold;
      }
    `}</style>
  </nav>
)}
