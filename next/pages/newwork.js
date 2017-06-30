import Header from '../components/base/header'
import Main from '../components/base/main'
import NewWorkForm from '../components/forms/newWorkForm'
import { graphqlQuery } from '../utils/api'

const Works = (props) => {
  const handleOnChange = (k,v)=>{
    console.log('changed %s to %s', k,v)
  }
  return (<div>
    <Header viewer={props.viewer} />
    <Main>
      <h1>New Work</h1>
      <p>This is the new work page.</p>
      <NewWorkForm onChange={handleOnChange}/>
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
