import React from "react";

import classNames from "classnames";

const range = (start, end) =>
  [...Array(end).keys()].map((el) => el + start);

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ pagecount, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  // console.log("pagesCount", pagesCount, pages);
  return (
    <li className="pagination">
      {pages.map((page) => (
        <PaginationItem
          pagecount={pagecount}
          page={page}
          key={page}
          onPageChange={onPageChange}
        />
      ))}
    </li>
  );
};

export default Pagination;
