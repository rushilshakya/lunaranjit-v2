import { Layout } from "@/components/Layout";
import SinglePost from "@/components/SinglePost";
import { getAllContentIds, getSingleContentFromSlug } from "@/lib/getData";
import { getDefaultContentType } from "@/lib/utilities";

const contentType = getDefaultContentType();

export default function Post({ blogPost }) {
  return (
    <Layout>
      <SinglePost postData={blogPost} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds(contentType);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogPost = getSingleContentFromSlug(params.slug, contentType);
  return {
    props: {
      blogPost,
    },
  };
}
