import Link from "next/link";
import Header from "../components/base/header";
import Main from "../components/base/main";
import Container from "../components/base/container";
import Menu from "../components/base/menu";
import Button from "../components/fields/button";
import { graphqlQuery } from "../utils/api";

const Works = props => {
  console.log(props.viewer);
  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>

        <h1>Works</h1>
        <Container right>
          <Link to="/newwork"><a><Button small label="New Work" /></a></Link>
        </Container>
        <Container>

          <ul>
            {/* {props.viewer.works.edges.map(work =>
              <li key={work.node.id}>{work.node.title}</li>
            )} */}
          </ul>
        </Container>
      </Main>
    </div>
  );
};

Works.getInitialProps = async ({ req }) => {
  const res = await graphqlQuery(
    req,
    `{
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
  }`
  );
  const json = await res.json();
  return json.data;
};

export default Works;
