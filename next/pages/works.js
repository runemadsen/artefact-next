import Header from '../components/base/header'
import Container from '../components/base/container'
import Menu from '../components/base/menu'
import { graphqlQuery } from '../utils/api'

const Works = (props) => {

  return (<div>
    <Header />
    <Menu viewer={props.viewer} />
    <Container>
      <p>This is the works page.</p>
    </Container>
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
