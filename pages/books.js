import { Layout } from "@/components/Layout";
import MenuLevelPage from "@/components/MenuLevelPage";
import { getContentForPage } from "@/lib/getData";

export async function getStaticProps() {
  const pageData = getContentForPage("books");

  return {
    props: {
      pageData,
    },
  };
}

export default function Books({ pageData }) {
  return (
    <Layout>
      <MenuLevelPage pageData={pageData} />
    </Layout>
  );
}
