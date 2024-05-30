import { HeroPost } from "@/components/HeroPost";
import { Layout } from "@/components/Layout";
import { getSortedData } from "@/lib/getData";

export async function getStaticProps() {
  const allPosts = getSortedData("posts");
  const pinnedPost = allPosts.find((x) => x.pinned === true);

  return {
    props: {
      allPosts,
      pinnedPost,
    },
  };
}

export default function Home({ allPosts, pinnedPost }) {
  const incrNbr = 10;

  return (
    <Layout>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row-lr">
            <HeroPost post={pinnedPost} />
            {/*
            {{ $paginator := .Paginate (where (where site.RegularPages "Type" "in" site.Params.mainSections) ".Title" "!="  ($.Scratch.Get "pinnedTitle") ) }}

          <!--rest of posts-->
            <div className="articlewrap">
              {{ range $index,$elements:= $paginator.Pages }}
              <article>
                <img src="{{ partial `functions/imageproc` .Params.Image }}" alt="{{ .Title }}">
                <div className="caption">
                  <h3><a href="{{ .Permalink }}">{{ .Title }}</a></h3>
                  <ul className="list-inline post-meta">
                    <li className="list-inline-item"><i className="ti-tag"></i></li>
                    {{ range .Params.Tags }}
                    <li className="list-inline-item"><a
                        href="{{ `tags/` | relLangURL }}{{ . | urlize | lower }}">{{ . | humanize }}</a></li> {{ end }}
                  </ul>
                  <p>{{ .Summary }}</p>
                </div>
              </article>
              {{ end }}
            </div>

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
