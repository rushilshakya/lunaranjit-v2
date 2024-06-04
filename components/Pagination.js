import Link from "next/link";

export const Pagination = ({ page }) => {
  return (
    <div className="col-12">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link href="{{ $paginator.Prev.URL }}" className="page-link">
            &laquo;
          </Link>
        </li>
        <li className="page-item{{ if eq . $paginator }} page-item active {{ end }}">
          <Link href="{{ .URL }}" className="page-link">
            {page}
          </Link>
        </li>
        <li className="page-item">
          <Link href="{{ $paginator.Next.URL }}" className="page-link">
            &raquo;
          </Link>
        </li>
      </ul>
    </div>
  );
};
