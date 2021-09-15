import React from "react";
import { useState, useEffect } from "react";
import _ from "lodash";

import { getMovie, movie } from "../../Services/fakeMovieService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import { Genre, getGenres } from "../../Services/fakeGenreService";
import ListGroup from "../common/listGroup";
import MovieTable from "./movieTable";
import { SortColumn } from "../common/table/tableHeader";

export interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
  let [movieList, setMovieList] = useState<movie[]>([]);
  let [movieCounter, setMovieCounter] = useState(0);
  let [currentPage, setCurrenPage] = useState(1);
  let [genreList, setGenreList] = useState<Genre[]>([]);
  let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  let [sortColumn, setSortColumn] = useState<SortColumn>({
    path: "title",
    order: "asc",
  });
  const PAGE_SIZE: number = 3;

  let handleGenreSelected = (genre: Genre) => {
    setSelectedGenre(genre);
    setCurrenPage(1);
  };

  useEffect(() => {
    const allMovie = getMovie();
    setMovieList(allMovie);
    setGenreList([{ _id: "", name: "All Genre" }, ...getGenres()]);
    setMovieCounter(allMovie.length);
  }, []);

  const handleDelete = (movie: movie) => {
    let moviesFilter = movieList.filter((m) => m._id !== movie._id);
    setMovieList(moviesFilter);
    setMovieCounter(moviesFilter.length);
  };

  const handleLike = (movie: movie) => {
    let movies = [...movieList];
    let index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;

    setMovieList(movies);
  };

  const handlePageChange = (i: number) => {
    setCurrenPage(i);
  };

  const handleSort = (sortColumn: SortColumn) => {
    setSortColumn(sortColumn);
  };

  if (movieCounter === 0) {
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
  }

  const getPageData = (): { totalCount: number; movies: movie[] } => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? movieList.filter((m) => _.isEqual(m.genre, selectedGenre))
        : movieList;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, PAGE_SIZE, currentPage);

    return { totalCount: filtered.length, movies: movies };
  };

  const { totalCount, movies } = getPageData();

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genreList}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelected}
          />
        </div>
        <div className="col">
          <h3>Showing {totalCount} movies in the database</h3>

          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={handleLike}
            onDelete={handleDelete}
            onSort={handleSort}
          />

          <Pagination
            itemCount={totalCount}
            pageSize={PAGE_SIZE}
            currentPage={currentPage}
            onClick={handlePageChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
