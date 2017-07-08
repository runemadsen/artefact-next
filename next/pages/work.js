import Header from "../components/base/header";
import Main from "../components/base/main";
import Container from "../components/base/container";
import WorkForm from "../components/forms/workForm";
import IconButton from "../components/elements/iconButton";
import { graphqlRequest } from "../utils/api";

const Work = props => {
  const handleOnChange = (k, v) => {
    console.log("changed %s to %s", k, v);
  };
  const handleTrash = () => {
    console.log("trash!");
  };
  console.log(props);
  return (
    <div>
      <Header viewer={props.viewer} />
      <Main>
        <h1>{props.work.title || "New Work"}</h1>
        <Container right>
          <IconButton name="trash" onClick={handleTrash} />
        </Container>
        <WorkForm onChange={handleOnChange} work={props.work} />
      </Main>
    </div>
  );
};

Work.getInitialProps = async ({ req }) => {
  // is this the right way?
  let id = req.url.split("/").pop();
  const res = await graphqlRequest(
    `query {
    viewer {
      id
      username
    }
    work(id:"${id}") {
      title
      width
      height
      depth
      dimensionUnit
    }
  }`,
    req
  );
  const json = await res.json();
  return json.data;
};

export default Work;
