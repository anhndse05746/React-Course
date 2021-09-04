import { Genre } from "./fakeGenreService";

const movies = [
  {
    _id: "1",
    title: "Terminator",
    genre: { _id: "1", name: "Action" },
    numberInStock: 2,
    dailyRate: 2.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "2",
    title: "Shang-chi and the legend of the ten rings ",
    genre: { _id: "1", name: "Action" },
    numberInStock: 4,
    dailyRate: 5.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "3",
    title: "Loki",
    genre: { _id: "1", name: "Action" },
    numberInStock: 1,
    dailyRate: 1.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "4",
    title: "Spiderman: No way home",
    genre: { _id: "1", name: "Action" },
    numberInStock: 0,
    dailyRate: 3.5,
    like: false,
    publishDate: "17-12-2021",
  },
  {
    _id: "5",
    title: "WandaVision",
    genre: { _id: "2", name: "Comedy" },
    numberInStock: 8,
    dailyRate: 0.5,
    like: false,
    publishDate: "3-9-2021",
  },
  {
    _id: "6",
    title: "Dr.Strange 2: multiverse of madness",
    genre: { _id: "3", name: "Thriller" },
    numberInStock: 1,
    dailyRate: 1.5,
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
