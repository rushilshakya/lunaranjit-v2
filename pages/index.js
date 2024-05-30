import { Layout } from "../components/Layout";
import { getSortedData } from "../lib/getData";

export async function getStaticProps() {
  const allPosts = getSortedData("posts");

  return {
    props: {
      allPosts,
    },
  };
}

export default function Home({ allPosts }) {
  const incrNbr = 10;

  return (
    <Layout>
      <h1>Hello</h1>
    </Layout>
  );
}
