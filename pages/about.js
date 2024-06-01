import { Layout } from "@/components/Layout";
import { getContentForPage } from "@/lib/getData";
import Markdown from "react-markdown";
import Image from "next/image";

export async function getStaticProps() {
  const aboutPage = getContentForPage("about");

  return {
    props: {
      aboutPage,
    },
  };
}

export default function About({ aboutPage }) {
  return (
    <Layout>
      <section className="section-sm pb-0 bg-aliceblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="text-center"></h1>
              <Image
                src={`/${aboutPage.image}`}
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
              <Markdown>{aboutPage.content}</Markdown>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
