import Markdown from "react-markdown";
import Image from "next/image";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";

export default function AboutType({ pageData }) {
  return (
    <>
      <section className="section-sm pb-0 bg-aliceblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="text-center"></h1>
              <Image
                src={pageData.image}
                alt="author"
                className="author-img"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <div className="content">
              <Markdown
                rehypePlugins={[
                  rehypeRaw,
                  [rehypeExternalLinks, { target: "_blank" }],
                ]}
              >
                {pageData.content}
              </Markdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
