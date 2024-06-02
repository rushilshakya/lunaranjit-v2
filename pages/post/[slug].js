import { Layout } from "@/components/Layout";
import SinglePost from "@/components/SinglePost";
import { getAllContentIds, getSingleContentFromSlug } from "@/lib/getData";

const contentType = "posts";

export default function MHDprovider({ blogPost }) {
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
