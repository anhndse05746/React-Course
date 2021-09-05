import React from "react";
import { movie } from "../Services/fakeMovieService";

import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader, { Column, SortColumn } from "./common/tableHeader";

export interface MovieTableProps {
  movies: movie[];
  onDelete: (movie: movie) => void;
  onLike: (movie: movie) => void;
  onSort: (sortColumn: SortColumn) => void;
  sortColumn: SortColumn;
}

const MovieTable: React.FC<MovieTableProps> = ({
  movies,
  onDelete,
  onLike,
  onSort,
  sortColumn,
}) => {
  const columns: Column[] = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRate", label: "Rate" },
    {
      key: "like",
      content: (movie: movie) => (
        <Like like={movie.like} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie: movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={movies} columns={columns} />
      {/* <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRate}</td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};

export default MovieTable;
