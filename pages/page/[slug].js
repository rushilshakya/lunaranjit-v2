import { getAllPageNbrs, getDataForStaticPropsForPage } from "@/lib/getData";
import { ListPosts } from "@/components/ListPosts";
import { getPostsPerPage, getDefaultContentType } from "@/lib/utilities";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page({
  posts,
  currentPage,
  totalPages,
  pinnedPost,
  redirectTo,
}) {
  const router = useRouter();
  useEffect(() => {
    if (redirectTo) {
      router.push(redirectTo);
    }
  });

  return (
    <ListPosts
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
      pinnedPost={pinnedPost}
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
  const staticProps = getDataForStaticPropsForPage(
    params.slug,
    getPostsPerPage(),
    getDefaultContentType()
  );

  return {
    props: {
      ...staticProps,
      currentPage: params.slug,
      redirectTo: params.slug == "1" ? "/" : null,
    },
  };
}
