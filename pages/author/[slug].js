import { Layout } from "@/components/Layout";
import { getAllAuthorIDs, getAuthorPostsFromAuthorID } from "@/lib/getData";
import { ListAuthorPosts } from "@/components/ListAuthorPosts";
import { AuthorDisplay } from "@/components/AuthorDisplay";

const contentType = "posts";

export default function Author({ author, posts }) {
  return (
    <Layout>
      <AuthorDisplay author={author} />
      {posts.length > 0 && <ListAuthorPosts posts={posts} />}
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
