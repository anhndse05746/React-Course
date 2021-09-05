import React from "react";
import _ from "lodash";
import { Column } from "./tableHeader";

export interface TableBodyProps {
  data: any[];
  columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  const renderCell = (item: any, column: Column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path!!);
  };

  const createTdKey = (item: any, column: Column) => {
    return item._id + (column.path || column.key);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createTdKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
