import Header from '../components/header'
import Container from '../components/container'
import Menu from '../components/menu'
import { graphqlQuery } from '../utils/api'

const Works = (props) => {

  return (<div>
    <Header />
    <Menu viewer={props.viewer} />
    <Container>
      <h1>Works</h1>
      <ul>
      {props.viewer.works.edges.map(work =>
        <li key={work.node.id}>{work.node.title}</li>
      )}
      </ul>
    </Container>
  </div>)

}

Works.getInitialProps = async ({ req }) => {

  const res = await graphqlQuery(req, `{
    viewer {
      id
      username
      works {
        edges {
          cursor
          node {
            id
            title
            medium
            artist {
              name
            }
          }
        }
      }
    }
  }`)
  const json = await res.json()
  return json.data
}

export default Works
