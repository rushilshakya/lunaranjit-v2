import { Layout } from "@/components/Layout";
import SinglePost from "@/components/SinglePost";
import { getAllContentIds } from "@/lib/getData";
import { getDefaultContentType } from "@/lib/utilities";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";

const contentType = getDefaultContentType();

export default function Post({ blogPost }) {
  const { data } = useTina(blogPost);
  // If no tags, then create an empty array
  if (!data.post.tags) {
    data.post.tags = [];
  }

  return (
    <Layout>
      <SinglePost postData={data.post} />
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
  const result = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });
  return {
    props: {
      blogPost: result,
    },
  };
}
