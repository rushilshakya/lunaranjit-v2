import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <section className="section-sm bg-aliceblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="text-center">
                Click{" "}
                <Link href="/" className="link-lr">
                  here
                </Link>{" "}
                to go to home page
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <div className="content"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
