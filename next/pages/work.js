import Header from "../components/base/header";
import Main from "../components/base/main";
import NewWorkForm from "../components/forms/newWorkForm";
import { graphqlRequest } from "../utils/api";

const Works = props => {
  const handleOnChange = (k, v) => {
    console.log("changed %s to %s", k, v);
  };
  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>
        <h1>New Work</h1>
        <p>This is the new work page.</p>
        <NewWorkForm onChange={handleOnChange} work={props.work} contacts={props.viewer.contacts.edges.map(c => c.node)} />
      </Main>
    </div>
  );
};

Works.getInitialProps = async ({ req, query }) => {

  // TODO: This currently loads all artists in contacts and passes
  // to the dropdown selector. Should we limit it? Make field do HTTP requests?
  const res = await graphqlRequest(`query {
    viewer {
      id
      username
      contacts(contactType:"artist") {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    work(id:"${query.id}") {
      title
      workCreatedAt
      width
      height
      depth
      dimensionUnit
      dimensionText
    }
  }`, req)
  const json = await res.json()
  return json.data
}

export default Works;
