import { Layout } from "@/components/Layout";
import { getSingleContentFromSlug } from "@/lib/getData";
import { getMenuPages, urlize } from "@/lib/utilities";
import MenuLevelPage from "@/components/MenuLevelPage";

const contentType = "menu";

export default function Post({ menuPost }) {
  return (
    <Layout>
      <MenuLevelPage pageData={menuPost} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const menupages = getMenuPages().filter(
    (menu) => menu.dataType === contentType
  );
  const paths = menupages.map((item) => ({
    params: {
      menu: urlize(item.url),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const menuPost = getSingleContentFromSlug(params.menu, contentType);
  return {
    props: {
      menuPost,
    },
  };
}
