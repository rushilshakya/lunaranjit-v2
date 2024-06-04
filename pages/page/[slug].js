import { getAllPageNbrs, getSortedData, getTotalPages } from "@/lib/getData";
import { ListPosts } from "@/components/ListPosts";
import { getPostsPerPage } from "@/lib/utilities";

const contentType = "posts";
const postsPerPage = getPostsPerPage();

export default function Page({ pagePosts, currentPage, totalPages }) {
  return (
    <ListPosts
      posts={pagePosts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

export async function getStaticPaths() {
  const paths = getAllPageNbrs(contentType, postsPerPage);
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
  const allPosts = getSortedData(contentType);
  const pagePosts = allPosts.slice(
    postsPerPage * (params.slug - 1),
    postsPerPage * params.slug
  );
  const totalPages = getTotalPages(contentType, postsPerPage);

  return {
    props: {
      pagePosts,
      currentPage: params.slug,
      totalPages,
    },
  };
}
