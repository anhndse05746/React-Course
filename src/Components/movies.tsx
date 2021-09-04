import React from "react";
import { getMovie, movie } from "../Services/fakeMovieService";
import { useState, useEffect } from "react";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Genre, getGenres } from "../Services/fakeGenreService";
import ListGroup from "./common/listGroup";
import _ from "lodash";
import MovieTable from "./movieTable";

export interface MoviesProps {}

const Movies: React.FC<MoviesProps> = ({}) => {
  let [movieList, setMovieList] = useState<movie[]>([]);
  let [moviePage, setMoviePage] = useState<movie[]>([]);
  let [movieCounter, setMovieCounter] = useState(moviePage.length);
  let [currentPage, setCurrenPage] = useState(1);
  let [genreList, setGenreList] = React.useState<Genre[]>([]);
  let [selectedGenre, setSelectedGenre] = React.useState<Genre>({
    _id: "0",
    name: "All Genre",
  });

  let handleGenreSelected = (genre: Genre) => {
    setSelectedGenre(genre);
    setCurrenPage(1);
  };

  const PAGE_SIZE: number = 3;

  useEffect(() => {
    const allMovie = getMovie();
    setMovieList(allMovie);

    let movies = paginate(allMovie, PAGE_SIZE, 1);
    setMoviePage(movies);
    setMovieCounter(movies.length);
    setGenreList([{ _id: "0", name: "All Genre" }, ...getGenres()]);
  }, []);

  //filter movie list
  useEffect(() => {
    const allMovie = getMovie();
    const filtered = filterMovie(allMovie, selectedGenre);
    setMovieList(filtered);

    const filteredPage = paginate(filtered, PAGE_SIZE, currentPage);
    setMoviePage(filteredPage);
    setMovieCounter(filteredPage.length);
  }, [selectedGenre]);

  const filterMovie = (movies: movie[], genre: Genre): movie[] => {
    if (_.isEqual(genre, { _id: "0", name: "All Genre" })) return movies;
    return movies.filter((m) => _.isEqual(m.genre, genre));
  };

  const handleDelete = (movie: movie) => {
    let moviesFilter = movieList.filter((m) => m._id !== movie._id);
    setMovieList(moviesFilter);

    var movies = paginate(moviesFilter, PAGE_SIZE, currentPage);
    setMoviePage(movies);
    setMovieCounter(movies.length);
  };

  const handleLike = (movie: movie) => {
    let movies = [...movieList];
    let index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;

    setMovieList(movies);
  };

  const handlePageChange = (i: number) => {
    var movies = paginate(movieList, PAGE_SIZE, i);
    setCurrenPage(i);
    setMoviePage(movies);
    setMovieCounter(movies.length);
  };

  if (movieCounter === 0)
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genreList}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelected}
          />
        </div>
        <div className="col">
          <p>There is no movie in database</p>
        </div>
      </div>
    );
  else
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genreList}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelected}
          />
        </div>
        <div className="col">
          <h3>Showing {movieCounter} movies in the database</h3>

          <MovieTable
            movies={moviePage}
            onLike={handleLike}
            onDelete={handleDelete}
          />

          <Pagination
            itemCount={movieList.length}
            pageSize={PAGE_SIZE}
            currentPage={currentPage}
            onClick={handlePageChange}
          />
        </div>
      </div>
    );
};

export default Movies;
