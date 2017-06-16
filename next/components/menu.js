import React from 'react'
import Link from 'next/link'
import Container from './container'
import Router from 'next/router'
import { postRequest } from '../utils/api'

const signOut = (e) => {

  e.preventDefault()

  postRequest(API_BASE_URL + '/users/logout')
    .then(res => {
      console.log(res)
      Router.push('/')
    })
}

export default (props) => {

  return (<nav>
    <Container>
      <Link href="/"><a id="logo">Artefact</a></Link>
      { props.viewer ? <Link href="/works"><a>Works</a></Link> : null }
      { props.viewer ? <Link href="/people"><a>People</a></Link> : null }
      { props.viewer ? <Link href="/user"><a>Profile</a></Link> : null }
      { props.viewer ? <a href="#" onClick={signOut}>Sign out</a> : null }
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
