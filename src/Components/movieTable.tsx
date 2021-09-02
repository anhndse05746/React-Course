import React from "react";
import { getMovie, movie } from "./../Services/fakeMovieService";
import { useState } from "react";
import Like from "./like";
export interface MovieTableProps {}

const MovieTable: React.FC<MovieTableProps> = () => {
  let [movieList, setMovieList] = useState<movie[]>(getMovie());
  let [movieCounter, setMovieCounter] = useState(movieList.length);

  // const getMovieCounter = () => {
  //   if (movieCounter === 0) return <h3>There is no movies in database!!</h3>;
  //   return null;
  // };

  const handleDelete = (movie: movie) => {
    setMovieList(movieList.filter((m) => m._id !== movie._id));
    setMovieCounter(movieCounter - 1);
  };

  const handleLike = (movie: movie) => {
    let movies = [...movieList];
    let index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;

    setMovieList(movies);
  };

  if (movieCounter === 0) return <p>There is no movie in database</p>;
  else
    return (
      <React.Fragment>
        <h3>Showing {movieCounter} movies in the database</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRate}</td>
                <td>
                  <Like like={movie.like} onClick={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <ul>
      {movies.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </ul> */}
      </React.Fragment>
    );
};

export default MovieTable;
