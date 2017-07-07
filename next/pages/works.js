import Header from "../components/base/header";
import Main from "../components/base/main";
import Container from "../components/base/container";
import Menu from "../components/base/menu";
import WorkList from "../components/display/list";
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
  console.log(props.viewer);
  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>

        <h1>Works</h1>
        <Container right>
          <Button
            type="button"
            small
            label="New Work"
            onClick={newWorkSubmit}
          />
        </Container>
        <Container>
          <WorkList works={props.viewer.works.edges} />
        </Container>
        <Container>
          <ul>
            {props.viewer.works.edges.map(work =>
              <li key={work.node.id}>
                {work.node.title} &nbsp;&nbsp;
                <Link route="Work" params={{ id: work.node.id }}>
                  <a>Edit work</a>
                </Link>
              </li>
            )}
          </ul>
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
