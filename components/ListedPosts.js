import { urlize, getSummary } from "@/lib/utilities";
import Image from "next/image";

export const ListedPosts = ({ posts }) => {
  return (
    <div className="articlewrap">
      {posts.map((post) => (
        <article key={post.id}>
          <Image
            src={`/${post.image}`}
            alt={post.title}
            width={544.664}
            height={200}
          />
          <div className="caption">
            <h3>
              <a href={`/post/${post.id}`}>{post.title}</a>
            </h3>
            {post.tags.length > 0 && (
              <ul className="list-inline post-meta">
                <li className="list-inline-item">
                  <i className="ti-tag"></i>
                </li>

                {post.tags.map((tag, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href={`/tags/${urlize(tag)}`}>{tag}</a>
                  </li>
                ))}
              </ul>
            )}
            <p>{post.summary ? post.summary : getSummary(post.content)}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
