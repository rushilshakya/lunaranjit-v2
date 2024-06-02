import { Layout } from "@/components/Layout";
import { getAllAuthorIDs, getAuthorPostsFromAuthorID } from "@/lib/getData";
import { ListAuthorPosts } from "@/components/ListAuthorPosts";
import { AuthorDisplay } from "@/components/AuthorDisplay";

const contentType = "posts";

export default function Author({ author, posts }) {
  return (
    <Layout>
      <section className="section-sm">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center display-3">
              Items are showing from {author.title}
            </h1>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            {posts.length > 0 && <ListAuthorPosts posts={posts} />}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllAuthorIDs(contentType);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { author, posts } = getAuthorPostsFromAuthorID(
    params.slug,
    contentType
  );

  return {
    props: {
      author,
      posts,
    },
  };
}
