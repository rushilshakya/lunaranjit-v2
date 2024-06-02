import { Layout } from "@/components/Layout";
import { getAllTags, getPostsForTag } from "@/lib/getData";
import { ListedPosts } from "@/components/ListedPosts";

const contentType = "posts";

export default function Tag({ postsForTag }) {
  return (
    <Layout>
      <ListedPosts posts={postsForTag} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllTags(contentType);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsForTag = getPostsForTag(params.slug, contentType);
  return {
    props: {
      postsForTag,
    },
  };
}
