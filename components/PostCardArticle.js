import { urlize, getSummary } from "@/lib/utilities";
import Image from "next/image";
import Link from "next/link";

export const PostCardArticle = ({ post }) => {
  return (
    <article>
      <Image src={post.image} alt={post.title} width={544.664} height={200} />
      <div className="caption">
        <h3>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </h3>
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
        <p>{post.summary ? post.summary : getSummary(post.content)}</p>
      </div>
    </article>
  );
};
