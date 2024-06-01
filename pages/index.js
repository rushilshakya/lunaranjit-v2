import { HeroPost } from "@/components/HeroPost";
import { Layout } from "@/components/Layout";
import { ListedPosts } from "@/components/ListedPosts";
import { getSortedData } from "@/lib/getData";

export async function getStaticProps() {
  const allPosts = getSortedData("posts");
  const pinnedPost = allPosts.find((x) => x.pinned === true);
  const remainingPosts = allPosts.filter((x) => x.id !== pinnedPost.id);

  return {
    props: {
      remainingPosts,
      pinnedPost,
    },
  };
}

export default function Home({ remainingPosts, pinnedPost }) {
  const incrNbr = 10;

  return (
    <Layout>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            {pinnedPost && <HeroPost post={pinnedPost} />}
            {remainingPosts.length && <ListedPosts posts={remainingPosts} />}
            {/*
            TODO: Menu items - about, write, speak, collaborate, contact, books
            TODO: Individual posts
            TODO: Tag pages
            TODO: Pagination
            {{ $paginator := .Paginate (where (where site.RegularPages "Type" "in" site.Params.mainSections) ".Title" "!="  ($.Scratch.Get "pinnedTitle") ) }}



            <div className="col-12">

              <!-- pagination -->
              {{ $paginator := .Paginator }}
              <!-- Number of links either side of the current page. -->
              {{ $adjacent_links := 2 }}
              <!-- $max_links = ($adjacent_links * 2) + 1 -->
              {{ $max_links := (add (mul $adjacent_links 2) 1) }}
              <!-- $lower_limit = $adjacent_links + 1 -->
              {{ $lower_limit := (add $adjacent_links 1) }}
              <!-- $upper_limit = $paginator.TotalPages - $adjacent_links -->
              {{ $upper_limit := (sub $paginator.TotalPages $adjacent_links) }}
              <!-- If there's more than one page. -->
              {{ if gt $paginator.TotalPages 1 }}
              <ul className="pagination justify-content-center">
                <!-- Previous page. -->
                {{ if $paginator.HasPrev }}
                <li className="page-item">
                  <a href="{{ $paginator.Prev.URL }}" className="page-link">
                    &laquo;
                  </a>
                </li>
                {{ end }}
                <!-- Page numbers. -->
                {{ range $paginator.Pagers }}
                {{ $.Scratch.Set "page_number_flag" false }}
                <!-- Advanced page numbers. -->
                {{ if gt $paginator.TotalPages $max_links }}
                <!-- Lower limit pages. -->
                <!-- If the user is on a page which is in the lower limit.  -->
                {{ if le $paginator.PageNumber $lower_limit }}
                <!-- If the current loop page is less than max_links. -->
                {{ if le .PageNumber $max_links }}
                {{ $.Scratch.Set "page_number_flag" true }}
                {{ end }}
                <!-- Upper limit pages. -->
                <!-- If the user is on a page which is in the upper limit. -->
                {{ else if ge $paginator.PageNumber $upper_limit }}
                <!-- If the current loop page is greater than total pages minus $max_links -->
                {{ if gt .PageNumber (sub $paginator.TotalPages $max_links) }}
                {{ $.Scratch.Set "page_number_flag" true }}
                {{ end }}
                <!-- Middle pages. -->
                {{ else }}
                {{ if and ( ge .PageNumber (sub $paginator.PageNumber $adjacent_links) ) ( le .PageNumber (add $paginator.PageNumber $adjacent_links) ) }}
                {{ $.Scratch.Set "page_number_flag" true }}
                {{ end }}
                {{ end }}
                <!-- Simple page numbers. -->
                {{ else }}
                {{ $.Scratch.Set "page_number_flag" true }}
                {{ end }}
                <!-- Output page numbers. -->
                {{ if eq ($.Scratch.Get "page_number_flag") true }}
                <li className="page-item{{ if eq . $paginator }} page-item active {{ end }}">
                  <a href="{{ .URL }}" className="page-link">
                    {{ .PageNumber }}
                  </a>
                </li>
                {{ end }}
                {{ end }}
                <!-- Next page. -->
                {{ if $paginator.HasNext }}
                <li className="page-item">
                  <a href="{{ $paginator.Next.URL }}" className="page-link">
                    &raquo;
                  </a>
                </li>
                {{ end }}
              </ul>
              {{ end }}
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
