import { Movie } from "shared/types";
export type FavoritesType = {
  _list: Movie[];
  _isFavorite: (movie: Movie) => boolean;
  setFavoriteMovies: (movies: Movie[]) => Movie[];
};