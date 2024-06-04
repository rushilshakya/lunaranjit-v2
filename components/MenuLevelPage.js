import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";

export default function MenuLevelPage({ pageData }) {
  return (
    <>
      <section className="section-sm bg-aliceblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="text-center">{pageData.title}</h1>
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
