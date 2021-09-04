import React from "react";
import { movie } from "../Services/fakeMovieService";

import Like from "./common/like";

export interface MovieTableProps {
  movies: movie[];
  onDelete: (movie: movie) => void;
  onLike: (movie: movie) => void;
  onSort: (path: string) => void;
}

const MovieTable: React.FC<MovieTableProps> = ({
  movies,
  onDelete,
  onLike,
  onSort,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRate}</td>
            <td>
              <Like like={movie.like} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
