const Genres = [
  { _id: "1", name: "Action" },
  { _id: "2", name: "Comedy" },
  { _id: "3", name: "Thriller" },
];

export interface Genre {
  _id: string;
  name: string;
}

export const getGenres = () => {
  return Genres;
};
