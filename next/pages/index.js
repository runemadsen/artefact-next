import Link from 'next/link'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

import { graphqlQuery, postRequest } from '../utils/api'

import Header from '../components/base/header'
import Main from '../components/base/main'
import SignInOrSignUp from '../components/forms/signInOrSignUp'
import Onboarding from '../components/forms/onboarding'

const onSignIn = async (username, password) => {

  const res = await postRequest(API_BASE_URL + '/users/login', {
    username: username,
    password: password
  })
  const json = await res.json()
  const res2 = await postRequest('/session', {
    sessionId: json.data.sessionId
  })

  Router.push('/')
}

const onSignUp = async (username, password, email) => {

  const res = await postRequest(API_BASE_URL + '/users', {
    user: {
      username: username,
      password: password,
      email: email
    }
  })
  const json = await res.json()
  const res2 = await postRequest('/session', {
    sessionId: json.data.sessionId
  })

  Router.push('/')
}

const onProfileChange = async (name, data) => {
  console.log("changed %s to %s", name, data)
}

const Index = (props) => {
  return <div>
    <Header viewer={props.viewer} title="Artefact" />

    <Main>
      { props.viewer
        ?
          <Onboarding onChange={onProfileChange}/>
        :
        <SignInOrSignUp onSignUp={onSignUp} onSignIn={onSignIn}/>
      }
    </Main>
  </div>
}

Index.getInitialProps = async ({ req }) => {

  const res = await graphqlQuery(req, `{
    viewer {
      id
      username
    }
  }`)
  const json = await res.json()
  return json.data
}

export default Index
