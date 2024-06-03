import { Layout } from "@/components/Layout";
import { getAllPageNbrs, getSortedData } from "@/lib/getData";
import { ListPosts } from "@/components/ListPosts";

const contentType = "posts";
const postsPerPage = 10;

export default function Page({ pagePosts }) {
  return (
    <Layout>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            {pagePosts.length > 0 && <ListPosts posts={pagePosts} />}
          </div>
        </div>
      </section>
    </Layout>
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
  const allPosts = getSortedData("posts");
  const pagePosts = allPosts.slice(
    postsPerPage * (params.slug - 1),
    postsPerPage * params.slug
  );

  return {
    props: {
      pagePosts,
    },
  };
}
