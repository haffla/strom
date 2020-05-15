import { getAllAreaIds, getAreaData } from "../../lib/areas";
import Layout from "../../components/layout";

export default function Area(props) {
  return (
    <Layout>
      <h1>{props.title}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllAreaIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getAreaData(params.id);

  return {
    props: data.content,
  };
}
