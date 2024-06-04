import { Layout } from "@/components/Layout";
import { getAllTags, getPostsForTag } from "@/lib/getData";
import { HeroPost } from "@/components/HeroPost";
import { urlize } from "@/lib/utilities";
import { PostCard } from "@/components/PostCard";
import { getDefaultContentType } from "@/lib/utilities";

const contentType = getDefaultContentType();

export default function Tag({ tag, postsForTag }) {
  return (
    <Layout>
      <section className="section-sm">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center display-3">
              Items are showing from {tag}
            </h1>
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            {postsForTag.length > 0 && <HeroPost post={postsForTag[0]} />}
            {postsForTag.length > 1 &&
              postsForTag
                .slice(1)
                .map((post) => (
                  <PostCard
                    post={post}
                    imgWidth={810}
                    imgHeight={344}
                    key={post.id}
                  />
                ))}
          </div>
        </div>
      </section>
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
  const humanizedTag =
    postsForTag.length > 0
      ? postsForTag[0].tags.find((x) => urlize(x) === params.slug)
      : "Default";
  return {
    props: {
      tag: humanizedTag,
      postsForTag,
    },
  };
}
