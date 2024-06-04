import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { urlize } from "@/lib/utilities";
import Link from "next/link";

export default function SinglePost({ postData }) {
  return (
    <>
      <section>
        <div className="container-fluid-lr">
          <div className="post">
            <Image
              src={postData.image}
              className="img-pinned-title"
              alt={postData.title}
              width={1650}
              height={420}
            />

            <div className="post-content">
              <h2 className="post-title">{postData.title}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="content">
                <Markdown rehypePlugins={[rehypeRaw]}>
                  {postData.content}
                </Markdown>
              </div>
              <div className="text-center mt-5">
                {postData.tags.length > 0 && (
                  <ul className="list-inline post-meta d-inline-block mr-4">
                    <li className="list-inline-item">
                      <i className="ti-tag"></i>
                    </li>

                    {postData.tags.map((tag, i) => (
                      <li className="list-inline-item" key={i}>
                        <Link href={`/tag/${urlize(tag)}`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                <span>
                  <i className="ti-user mr-2"></i>
                  {postData.author === "Luna Ranjit" ? (
                    <Link href="/about">{postData.author}</Link>
                  ) : (
                    <Link href={`/author/${postData.author}`}>
                      {postData.author}
                    </Link>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
