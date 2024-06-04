import { urlize } from "@/lib/utilities";
import Image from "next/image";
import Link from "next/link";

export const HeroPost = ({ post }) => {
  return (
    <div className="col-12 mb-4">
      <div className="post">
        <Image
          src={post.image}
          className="img-pinned-title"
          alt={post.title}
          width={1650}
          height={420}
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
