import { Layout } from "@/components/Layout";
import { ListPosts } from "@/components/ListPosts";
import { getSortedData } from "@/lib/getData";

export async function getStaticProps() {
  const allPosts = getSortedData("posts");
  const pinnedPost = allPosts.find((x) => x.pinned === true);
  const remainingPosts = allPosts.filter((x) => x.id !== pinnedPost.id);

  return {
    props: {
      remainingPosts,
      pinnedPost,
    },
  };
}

export default function Home({ remainingPosts, pinnedPost }) {
  return (
    <Layout>
      <ListPosts posts={remainingPosts} pinnedPost={pinnedPost} page={"1"} />
    </Layout>
  );
}

/*
TODO: Pagination
TODO: Remaining toml files

DONE: Menu items - about, write, speak, collaborate, contact, books
DONE: Individual posts
DONE: Author page
DONE: Tag pages
DONE: Search functionality
DONE: Other draft pages like organize?
*/
