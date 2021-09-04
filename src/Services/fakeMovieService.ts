import { Genre } from "./fakeGenreService";

const movies = [
  {
    _id: "1",
    title: "Terminator",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRate: 2.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "2",
    title: "Shang-chi and the legend of the ten rings ",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRate: 2.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "3",
    title: "Loki",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRate: 2.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "4",
    title: "Spiderman: No way home",
    genre: { _id: "1", name: "Action" },
    numberInStock: 6,
    dailyRate: 2.5,
    like: false,
    publishDate: "17-12-2021",
  },
  {
    _id: "5",
    title: "WandaVision",
    genre: { _id: "2", name: "Comedy" },
    numberInStock: 6,
    dailyRate: 2.5,
    like: false,
    publishDate: "3-9-2021",
  },
];

export interface movie {
  _id: string;
  title: string;
  genre: Genre;
  numberInStock: number;
  dailyRate: number;
  like: boolean;
  publishDate: string;
}

export const getMovie = (): movie[] => {
  return movies;
};

export const deleteMovie = (movie: movie) => {
  return movies.filter((m) => m._id !== movie._id);
};
