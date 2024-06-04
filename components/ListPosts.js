import { PostCardArticle } from "./PostCardArticle";
import { HeroPost } from "./HeroPost";

export const ListPosts = ({ posts, pinnedPost }) => {
  return (
    <section className="section pt-0">
      <div className="container-fluid">
        <div className="row-lr">
          {pinnedPost && <HeroPost post={pinnedPost} />}
          {posts.length > 0 && (
            <div className="articlewrap">
              {posts.map((post) => (
                <PostCardArticle post={post} key={post.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
