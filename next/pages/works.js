import Header from "../components/base/header";
import Main from "../components/base/main";
import Container from "../components/base/container";
import Menu from "../components/base/menu";
import Searchbar from "../components/filter/searchbar";
import List from "../components/display/list";
import ListItem from "../components/display/listItem";
import Button from "../components/fields/button";
import { graphqlRequest } from "../utils/api";
import { Router, Link } from "../routes";

const newWorkSubmit = async e => {
  e.preventDefault();
  const res = await graphqlRequest(`mutation {
    createWork {
      id
    }
  }`);
  const json = await res.json();
  Router.pushRoute("Work", { id: json.data.createWork.id });
};

const Works = props => {
  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>

        <h1>Works</h1>
        <Container right>
          <Searchbar />
          <Button
            type="button"
            small
            label="New Work"
            onClick={newWorkSubmit}
          />
        </Container>
        <Container>
          <List>
            {props.viewer.works.edges.map((w, i) => {
              return <ListItem key={`work-${i}`} work={w.node} />;
            })}
          </List>
        </Container>

      </Main>
    </div>
  );
};

Works.getInitialProps = async ({ req }) => {
  const res = await graphqlRequest(
    `query {
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
  }`,
    req
  );
  const json = await res.json();
  return json.data;
};
export default Works;
