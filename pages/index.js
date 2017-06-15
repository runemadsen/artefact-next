import Link from 'next/link'
import Header from '../components/header'
import Container from '../components/container'
import Menu from '../components/menu'
import SignUp from '../components/signup'
import fetch from 'isomorphic-unfetch'

const Index = () => (
  <div>
    <Header />
    <Menu />
    <Container>
      <p>IF ANONYMOUS</p>
      <h2>Sign up</h2>
      <SignUp />

      <h2>Sign in</h2>

      SIGNIN FORM HERE

    </Container>
  </div>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(API_BASE_URL + '/graphql', {
    method: 'POST',
    body: `{
      query {
        viewer {
          name
          id
        }
      }
    }`
  })
  const json = await res.json()
  // handle HTTP error!
  // handle error in JSON!
  return { stars: json.data }
}

export default Index
