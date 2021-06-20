import { Movie } from "shared/types";
import { AppStorage } from "services/AppStorage";
import { FavoritesType } from "./types";

export const Favorites: FavoritesType = {
  _list: [],
  
  _isFavorite(movie: Movie) {
    const found = this._list.find((favorite) => {
      return favorite.id === movie.id;
    });

    return Boolean(found);
  },

  setFavoriteMovies(movies: Movie[]) {
    this._list = AppStorage.getFavorites();
    
    const tmpList = [...movies];
    
    tmpList.forEach((movie) => {
      if (this._isFavorite(movie)) {
        movie.favorite = true;
      } else {
        movie.favorite = false;
      }
    });

    return tmpList;
  },
};
