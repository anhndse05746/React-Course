import React from "react";
import { Link } from "react-router-dom";

import { movie } from "../../Services/fakeMovieService";
import Like from "./../common/like";
import Table from "./../common/table/table";
import { Column, SortColumn } from "./../common/table/tableHeader";

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
    {
      path: "title",
      label: "Title",
      content: (movie: movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
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
    <Table
      data={movies}
      collumns={columns}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
};

export default MovieTable;
