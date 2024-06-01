import { Layout } from "@/components/Layout";
import MenuLevelPage from "@/components/MenuLevelPage";
import { getContentForPage } from "@/lib/getData";

export async function getStaticProps() {
  const pageData = getContentForPage("speak");

  return {
    props: {
      pageData,
    },
  };
}

export default function Speak({ pageData }) {
  return (
    <Layout>
      <MenuLevelPage pageData={pageData} />
    </Layout>
  );
}
