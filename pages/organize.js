import { Layout } from "@/components/Layout";
import MenuLevelPage from "@/components/MenuLevelPage";
import { getContentForPage } from "@/lib/getData";

export async function getStaticProps() {
  const pageData = getContentForPage("organize");

  return {
    props: {
      pageData,
    },
  };
}

export default function Organize({ pageData }) {
  return (
    <Layout>
      <MenuLevelPage pageData={pageData} />
    </Layout>
  );
}
