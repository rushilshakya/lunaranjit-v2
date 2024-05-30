import { urlize } from "@/lib/utilities";
import Image from "next/image";

export const HeroPost = ({ post }) => {
  return (
    <div className="col-12 mb-4">
      <div className="post">
        <Image
          src={`/${post.image}`}
          className="img-pinned-title"
          alt={post.title}
          width={2191}
          height={420}
        />
        <div className="post-content">
          <h2 className="post-title">
            <a href={`/post/${post.id}`}>{post.title}</a>
          </h2>
          <ul className="list-inline post-meta">
            <li className="list-inline-item">
              <i className="ti-tag"></i>
            </li>
            {post.tags.length &&
              post.tags.map((tag, i) => (
                <li className="list-inline-item" key={i}>
                  <a href={`/tags/${urlize(tag)}`}>{tag}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};