import Layout from "../components/layout";
import Link from "next/link";
import { getAllAreaData } from "../lib/areas";

export default function Home({ areas }) {
  return (
    <Layout>
      <h1>Strom</h1>
      <div>
        {areas.map(({ id, content }) => {
          return (
            <div>
              <Link href="/areas/[id]" as={`/areas/${id}`}>
                <a>{content.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      areas: getAllAreaData(),
    },
  };
}
