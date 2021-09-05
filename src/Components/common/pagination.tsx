import * as React from "react";
import _ from "lodash";
export interface PaginationProps {
  itemCount: number;
  pageSize: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemCount,
  pageSize,
  currentPage,
  onClick,
}) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  const getPageItemClass = (i: number) => {
    let className = "page-item";
    return i === currentPage ? className + " active" : className;
  };

  if (pageCount === 1) return null;
  return (
    <nav aria-label="paging">
      <ul className="pagination">
        {pages.map((i) => (
          <li
            onClick={() => onClick(i)}
            key={i}
            className={getPageItemClass(i) + " clickable"}
          >
            <span className="page-link">{i}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
