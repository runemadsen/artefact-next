import Link from 'next/link'
import Header from '../components/base/header'
import Container from '../components/base/container'
import Menu from '../components/base/menu'
import SignUp from '../components/Forms/SignUp'
import SignIn from '../components/Forms/SignIn'
import Router from 'next/router'
import { graphqlQuery, postRequest } from '../utils/api'
import fetch from 'isomorphic-unfetch'

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

const Index = (props) => {

  return <div>
    <Header />
    <Menu viewer={props.viewer} />
    <Container>
      { props.viewer 
        ?
          <p>You are logged in</p>
        :
        <div>
          <SignUp onSubmit={onSignUp} />
          <div>or...</div> 
          <SignIn onSubmit={onSignIn} />
        </div>
      }
    </Container>
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
