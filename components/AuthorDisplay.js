import Image from "next/image";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

export const AuthorDisplay = ({ author }) => {
  return (
    <section className="section-sm bg-aliceblue">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center">
              <figure>
                {author.image && (
                  <Image
                    src={author.image}
                    className="rounded-circle img-fluid mb-4"
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "cover",
                    }}
                    alt={author.title}
                    width={150}
                    height={150}
                  />
                )}
                <figcaption>
                  <h4>{author.title}</h4>
                </figcaption>
              </figure>
              {author.content && (
                <>
                  <hr />
                  <Markdown rehypePlugins={[rehypeRaw]}>
                    {author.content}
                  </Markdown>
                </>
              )}
              {author.social.length > 0 && (
                <>
                  <hr />
                  <ul className="list-inline social-icons">
                    {author.social.map((socialMedia, i) => (
                      <li className="list-inline-item" key={i}>
                        <Link href={socialMedia.link}>
                          <i className={socialMedia.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
