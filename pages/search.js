import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { PostCard } from "@/components/PostCard";
import { getSortedData } from "@/lib/getData";
import { useSearchParams } from "next/navigation";

export async function getStaticProps() {
  const allPosts = getSortedData("posts");

  return {
    props: {
      allPosts,
    },
  };
}
export default function Search({ allPosts }) {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState(undefined);

  useEffect(() => {
    const search =
      searchParams.get("s") &&
      searchParams.get("s").trim().replace("+", " ").toLowerCase();
    if (search) {
      setSearchTerm(search);
      setSearchResults(
        allPosts.filter((x) => x.title.toLowerCase().includes(search))
      );
    }
  }, [searchParams, allPosts]);
  console.log("searchTerm is", searchTerm);

  return (
    <Layout>
      <section className="section-sm">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center display-3">
              Search results for &ldquo;{searchTerm}&rdquo;
            </h1>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr" id="search-results">
            {searchTerm ? (
              searchResults.length > 0 ? (
                searchResults.map((post) => (
                  <PostCard
                    post={post}
                    imgWidth={810}
                    imgHeight={344}
                    key={post.id}
                  />
                ))
              ) : (
                <div className="text-center mx-auto">
                  <h2>No results found</h2>
                </div>
              )
            ) : (
              <div className="text-center mx-auto">
                <h2>Please enter a valid search query</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
