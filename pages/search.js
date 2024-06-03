import { Layout } from "@/components/Layout";
import { useState } from "react";
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
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState(allPosts);
  const searchParams = useSearchParams();
  const search = searchParams.get("s")
    ? searchParams.get("s").replace("+", " ").toLowerCase()
    : "";

  const searchResults = allPosts.filter((x) =>
    x.title.toLowerCase().includes(search)
  );

  console.log("search is", search);
  return (
    <Layout>
      <section className="section-sm">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center display-3">
              Search result for {search}
            </h1>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr" id="search-results">
            {searchResults.map((post) => (
              <PostCard
                post={post}
                imgWidth={810}
                imgHeight={344}
                key={post.id}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
