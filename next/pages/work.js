import Header from "../components/base/header";
import Main from "../components/base/main";
import WorkForm from "../components/forms/workForm";
import { graphqlRequest } from "../utils/api";

let saveTimeouts = {};

const WorkPage = props => {

  const handleOnChange = (k, v) => {

    if(saveTimeouts[k]) {
      clearTimeout(saveTimeouts[k]);
    }

    saveTimeouts[k] = setTimeout(() => {
      console.log("SAVING %s as %s", k, v);
    }, 1000)
  };

  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>
        <h1>New Work</h1>
        <p>This is the new work page.</p>
        <WorkForm onChange={handleOnChange} work={props.work} contacts={props.viewer.contacts.edges.map(c => c.node)} />
      </Main>
    </div>
  );
};

WorkPage.getInitialProps = async ({ req, query }) => {

  // TODO: This currently loads all artists in contacts and passes
  // to the dropdown selector. Should we limit it? Make search field do HTTP requests?
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

export default WorkPage;
