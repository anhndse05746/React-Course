import React from "react";
import _ from "lodash";

export interface TableHeaderProps {
  columns: Column[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
}

export interface Column {
  path?: string;
  key?: string;
  label?: string;
  content?: any;
}

export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortColumn,
  onSort,
}) => {
  const raiseSort = (path?: string) => {
    let order: "asc" | "desc" =
      sortColumn.path === path
        ? sortColumn.order === "asc"
          ? "desc"
          : "asc"
        : "asc";

    if (!_.isEmpty(path)) onSort({ path: path!!, order: order });
  };

  const sortIcon = (column: Column) => {
    if (sortColumn.path !== column.path) return null;
    else {
      if (sortColumn.order === "asc")
        return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
      return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    }
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            className="clickable"
            key={col.path || col.key}
            onClick={() => raiseSort(col.path)}
          >
            {col.label} {sortIcon(col)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
