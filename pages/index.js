import { ListPosts } from "@/components/ListPosts";
import { getDataForStaticPropsForPage } from "@/lib/getData";
import { getDefaultContentType, getPostsPerPage } from "@/lib/utilities";
import client from "@/tina/__generated__/client";

export async function getStaticProps() {
  const result = await client.queries.post({
    relativePath: "millions-blistered-feet.md",
  });

  const staticProps = getDataForStaticPropsForPage(
    "1",
    getPostsPerPage(),
    getDefaultContentType()
  );

  return {
    props: { ...staticProps, result },
  };
}

export default function Home({ posts, pinnedPost, totalPages, result }) {
  console.log(result);
  return (
    <>
      hello
      <ListPosts
        posts={posts}
        pinnedPost={pinnedPost}
        currentPage={"1"}
        totalPages={totalPages}
      />
    </>
  );
}

/*
TODO: Tiny letter doesn't work anymore
TODO: Editable UI

DONE: menu files editable through tina
DONE: Hamburger menu not working
DONE: Refactor menupage page level files
DONE: Fonts not appearing on netlify
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
