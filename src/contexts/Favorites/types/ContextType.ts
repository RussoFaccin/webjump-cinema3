import { Movie } from 'models';

export type ContextType = {
  favoriteMovies: Movie[];
  toggleFavoriteList: Function;
};
