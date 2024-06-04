import { getAllPageNbrs, getDataForStaticPropsForPage } from "@/lib/getData";
import { ListPosts } from "@/components/ListPosts";
import { getPostsPerPage, getDefaultContentType } from "@/lib/utilities";

export default function Page({ posts, currentPage, totalPages }) {
  return (
    <ListPosts
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

export async function getStaticPaths() {
  const paths = getAllPageNbrs(getDefaultContentType(), getPostsPerPage());
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  if (params.slug === "1") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const staticProps = getDataForStaticPropsForPage(
    params.slug,
    getPostsPerPage(),
    getDefaultContentType()
  );

  return {
    props: {
      ...staticProps,
      currentPage: params.slug,
    },
  };
}
