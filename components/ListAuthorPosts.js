import { urlize } from "@/lib/utilities";
import Image from "next/image";

export const ListAuthorPosts = ({ posts }) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title text-center">
              <h2 className="mb-5">Posted By This Author</h2>
            </div>
          </div>
          {posts.map((post) => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="post post-sm">
                <Image
                  src={`/${post.image}`}
                  className="img-not-pinned"
                  alt={post.title}
                  width={540}
                  height={344}
                />

                <div className="post-content">
                  <h2 className="post-title">
                    <a href={`/post/${post.id}`}>{post.title}</a>
                  </h2>

                  {post.tags.length > 0 && (
                    <ul className="list-inline post-meta">
                      <li className="list-inline-item">
                        <i className="ti-tag"></i>
                      </li>
                      {post.tags.map((tag, i) => (
                        <li className="list-inline-item" key={i}>
                          <a href={`/tag/${urlize(tag)}`}>{tag}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
