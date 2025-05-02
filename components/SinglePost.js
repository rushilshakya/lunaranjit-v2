import Image from "next/image";
import { urlize } from "@/lib/utilities";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function SinglePost({ postData }) {
  return (
    <>
      <section data-tina-field={tinaField(postData, "image")}>
        <div className="container-fluid-lr">
          <div className="post">
            {postData.image ? (
              <Image
                src={postData.image}
                className="img-pinned-title"
                alt={postData.title}
                width={1650}
                height={420}
              />
            ) : (
              <div
                className="img-pinned-title"
                style={{
                  backgroundColor: "#f0f0f0",
                }}
              ></div>
            )}

            <div className="post-content">
              <h2
                className="post-title"
                data-tina-field={tinaField(postData, "title")}
              >
                {postData.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div
                className="content"
                data-tina-field={tinaField(postData, "body")}
              >
                <TinaMarkdown
                  content={postData.body}
                  components={{
                    a: (props) => (
                      <a
                        rel="nofollow"
                        target="_blank"
                        {...props}
                        href={props.url}
                      />
                    ),
                  }}
                />
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
                  {postData.author._sys.filename === "luna-ranjit" ? (
                    <Link
                      href="/about"
                      data-tina-field={tinaField(postData, "author")}
                    >
                      {postData.author.title}
                    </Link>
                  ) : (
                    <Link href={`/author/${postData.author._sys.filename}`}>
                      {postData.author.title}
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
