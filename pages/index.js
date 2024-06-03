import { HeroPost } from "@/components/HeroPost";
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
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            {pinnedPost && <HeroPost post={pinnedPost} />}
            {remainingPosts.length > 0 && <ListPosts posts={remainingPosts} />}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/*
TODO: Pagination
TODO: Other draft pages like organize?

DONE: Menu items - about, write, speak, collaborate, contact, books
DONE: Individual posts
DONE: Author page
DONE: Tag pages
DONE: Search functionality
*/
