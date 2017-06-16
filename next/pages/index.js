import Link from 'next/link'
import Header from '../components/header'
import Container from '../components/container'
import Menu from '../components/menu'
import SignUp from '../components/signup'
import Router from 'next/router'
import { graphqlQuery, postRequest } from '../utils/api'
import fetch from 'isomorphic-unfetch'

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

  // Handle error!

  Router.push('/')
}

const Index = (props) => {

  let greeting
  if(props.viewer) {
    greeting = (<p>You are logged in</p>)
  }
  else {
    greeting = (<div>
      <SignUp onSubmit={onSignUp} />
      <h2>Sign in</h2>
      <p>Sign in form here</p>
    </div>)
  }

  return <div>
    <Header />
    <Menu viewer={props.viewer} />
    <Container>
      {greeting}
    </Container>
  </div>
}

Index.getInitialProps = async ({ req }) => {
  const res = await graphqlQuery(`{
    viewer {
      id
      username
    }
  }`)
  const json = await res.json()
  return json.data
}

export default Index
