import { Layout } from "@/components/Layout";
import { getSingleContentFromSlug } from "@/lib/getData";
import { getMenuPages, urlize } from "@/lib/utilities";
import MenuType from "@/components/MenuType";
import ContactType from "@/components/ContactType";
import AboutType from "@/components/AboutType";

const contentType = "menu";

export default function Post({ menuPost }) {
  const Component = getComponent(menuPost.type);

  return (
    <Layout>
      <Component pageData={menuPost} />
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

function getComponent(type) {
  switch (type.trim().toLowerCase()) {
    case "menu":
      return MenuType;
    case "about":
      return AboutType;
    case "contact":
      return ContactType;
    default:
      return MenuType;
  }
}
