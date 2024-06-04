import { Layout } from "@/components/Layout";
import { getAllAuthorIDs, getAuthorPostsFromAuthorID } from "@/lib/getData";
import { AuthorDisplay } from "@/components/AuthorDisplay";
import { PostCard } from "@/components/PostCard";
import { getDefaultContentType } from "@/lib/utilities";

const contentType = getDefaultContentType();

export default function Author({ author, posts }) {
  return (
    <Layout>
      <AuthorDisplay author={author} />
      {posts.length > 0 && (
        <section className="section-sm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title text-center">
                  <h2 className="mb-5">Posted By This Author</h2>
                </div>
              </div>
              {posts.map((post) => (
                <PostCard
                  post={post}
                  imgWidth={540}
                  imgHeight={344}
                  key={post.id}
                />
              ))}
            </div>
          </div>
        </section>
      )}
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
