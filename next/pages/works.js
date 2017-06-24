import Link from 'next/link'
import Header from '../components/base/header'
import Main from '../components/base/main'
import Container from '../components/base/container'
import Menu from '../components/base/menu'
import Button from '../components/fields/button'
import { graphqlQuery } from '../utils/api'

const Works = (props) => {

  return (<div>
    <Header viewer={props.viewer} />
    <Main>
      <p>This is the works page.</p>
      <Container right>
        <Link href="/newwork"><a><Button small label="New Work"/></a></Link>
      </Container>
    </Main>
  </div>)

}

Works.getInitialProps = async ({ req }) => {

  const res = await graphqlQuery(req, `{
    viewer {
      id
      username
    }
  }`)
  const json = await res.json()
  return json.data
}

export default Works
