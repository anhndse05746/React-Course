import * as React from "react";
import TableBody from "./tableBody";

import TableHeader, { Column, SortColumn } from "./tableHeader";

export interface TableProps {
  data: any[];
  collumns: Column[];
  sortColumn: SortColumn;
  onSort: (sortColumn: SortColumn) => void;
}

const Table: React.FC<TableProps> = ({
  data,
  collumns,
  sortColumn,
  onSort,
}) => {
  return (
    <table className="table">
      <TableHeader columns={collumns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={collumns} />
    </table>
  );
};

export default Table;
