import { Layout } from "@/components/Layout";
import MenuLevelPage from "@/components/MenuLevelPage";
import { getContentForPage } from "@/lib/getData";

export async function getStaticProps() {
  const pageData = getContentForPage("write");

  return {
    props: {
      pageData,
    },
  };
}

export default function Write({ pageData }) {
  return (
    <Layout>
      <MenuLevelPage pageData={pageData} />
    </Layout>
  );
}
// TODO: include All Things Old Is New Again?
