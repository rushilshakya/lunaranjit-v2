import { Layout } from "@/components/Layout";
import MenuLevelPage from "@/components/MenuLevelPage";
import { getContentForPage } from "@/lib/getData";

export async function getStaticProps() {
  const pageData = getContentForPage("collaborate");

  return {
    props: {
      pageData,
    },
  };
}

export default function Collaborate({ pageData }) {
  return (
    <Layout>
      <MenuLevelPage pageData={pageData} />
    </Layout>
  );
}
