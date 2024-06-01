import { Layout } from "@/components/Layout";
import { getContentForPage } from "@/lib/getData";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export async function getStaticProps() {
  const pageData = getContentForPage("contact");

  return {
    props: {
      pageData,
    },
  };
}

export default function Contact({ pageData }) {
  return (
    <Layout>
      <section className="section-sm bg-aliceblue">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center display-3">{pageData.title}</h1>
            <div className="text-center">
              <Markdown rehypePlugins={[rehypeRaw]}>
                {pageData.content}
              </Markdown>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row col-lg-8 mx-auto">
            <form
              action="https://formspree.io/f/xknkorvv"
              method="POST"
              className="row"
            >
              <input
                type="text"
                name="_gotcha"
                className="form-here"
                placeholder="First Name"
              />
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Type Your Message Here ..."
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary" type="submit">
                  Send now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
