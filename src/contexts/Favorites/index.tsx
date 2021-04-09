import React, { useCallback, useEffect, useState } from "react";
import { Movie } from 'shared/types';
import { AppStorage } from "services";
import { ContextType, Props } from "./types";
import { MovieList } from 'components/element';

export const FavoritesContext = React.createContext({} as ContextType);

const FavoritesProvider = ({ children }: Props) => {
  const [favoriteMovies, setFavorites] = useState<Movie[]>([]);

  const toggleFavoriteList = useCallback(
    (movie: Movie) => {
      const tmpList = [...favoriteMovies];
      const foundIndex = favoriteMovies.findIndex((movieEntry: Movie) => {
        return movieEntry.id === movie.id;
      });

      const addIndex = foundIndex >= 0 ? foundIndex : tmpList.length;
      const addItems = foundIndex >= 0 ? [] : [movie];
      
      tmpList.splice(addIndex, 1, ...addItems);

      AppStorage.setFavorites(tmpList);
      setFavorites(tmpList);
    },
    [favoriteMovies]
  );

  useEffect(() => {
    setFavorites(AppStorage.getFavorites());
  }, []);

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, toggleFavoriteList }}>
      {children}
      <MovieList title="Favoritos" movies={favoriteMovies} />
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider