import { Movie } from "shared/types";

export type ContextType = {
  favoriteMovies: Movie[];
  toggleFavoriteList(movie: Movie): void;
};
