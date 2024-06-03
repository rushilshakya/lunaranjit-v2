import { urlize } from "@/lib/utilities";
import Image from "next/image";
import Link from "next/link";

export const PostCard = ({ post, imgWidth, imgHeight }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="post post-sm">
        <Image
          src={`/${post.image}`}
          className="img-not-pinned"
          alt={post.title}
          width={imgWidth}
          height={imgHeight}
        />
        <div className="post-content">
          <h2 className="post-title">
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          {post.tags.length > 0 && (
            <ul className="list-inline post-meta">
              <li className="list-inline-item">
                <i className="ti-tag"></i>
              </li>
              {post.tags.map((tag, i) => (
                <li className="list-inline-item" key={i}>
                  <Link href={`/tag/${urlize(tag)}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
