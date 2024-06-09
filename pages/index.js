import { ListPosts } from "@/components/ListPosts";
import { getDataForStaticPropsForPage } from "@/lib/getData";
import { getDefaultContentType, getPostsPerPage } from "@/lib/utilities";

export async function getStaticProps() {
  const staticProps = getDataForStaticPropsForPage(
    "1",
    getPostsPerPage(),
    getDefaultContentType()
  );

  return {
    props: { ...staticProps },
  };
}

export default function Home({ posts, pinnedPost, totalPages }) {
  return (
    <ListPosts
      posts={posts}
      pinnedPost={pinnedPost}
      currentPage={"1"}
      totalPages={totalPages}
    />
  );
}

/*
TODO: Tiny letter doesn't work anymore
TODO: Fonts not appearing on netlify
TODO: Hamburger menu not working
TODO: Refactor menupage page level files

DONE: Links in content to be differentiated?
DONE: Deploy -> netlify or aws? previously aws, now on netlify
DONE: configure tina
DONE: 404 page
DONE: External links to open in new tab
DONE: Remaining toml files
DONE: Exclude pinned post
DONE: Pagination
DONE: Menu items - about, write, speak, collaborate, contact, books
DONE: Individual posts
DONE: Author page
DONE: Tag pages
DONE: Search functionality
DONE: Other draft pages like organize?
*/
