import Link from "next/link";

export const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="col-12">
      <ul className="pagination justify-content-center">
        {currentPage != "1" && (
          <li className="page-item">
            <Link href="/" className="page-link">
              &laquo;
            </Link>
          </li>
        )}
        {pages.length > 0 &&
          pages.map((page) => (
            <li
              className={`page-item ${currentPage == page && "active"}`}
              key={page}
            >
              <Link href={`/page/${page}`} className="page-link">
                {page}
              </Link>
            </li>
          ))}
        {currentPage != totalPages && (
          <li className="page-item">
            <Link href={`/page/${totalPages}`} className="page-link">
              &raquo;
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
