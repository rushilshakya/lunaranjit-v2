import { PostCardArticle } from "./PostCardArticle";
import { HeroPost } from "./HeroPost";
import { Pagination } from "./Pagination";

export const ListPosts = ({ posts, pinnedPost, currentPage, totalPages }) => {
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
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
};
