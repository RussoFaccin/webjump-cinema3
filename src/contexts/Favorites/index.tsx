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

      if (foundIndex >= 0) {
        tmpList.splice(foundIndex, 1);
      } else {
        tmpList.push(movie);
      }
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