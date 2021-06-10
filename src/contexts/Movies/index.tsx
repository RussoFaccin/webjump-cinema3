import React, { useCallback, useEffect, useState } from "react";
import { MovieList } from "components/element/";
import { Movie } from "shared/types";
import { AppStorage, Data, Favorites } from "services";
import { ContextType } from "./types";
import { useAuth } from "contexts";

export const FavoritesContext = React.createContext({} as ContextType);

const MoviesProvider = () => {
  const { isLogged } = useAuth();
  // Popular Movies
  const [popularMovies, setPopular] = useState<Movie[]>([]);

  const getPopularMovies = useCallback(async () => {
    const result = await Data.getMovieList("popular");
    setPopular(Data.formatDataAPI(result));
  }, []);

  // Now Playing Movies
  const [nowPlayingMovies, setNowPlaying] = useState<Movie[]>([]);

  const getNowPlayingMovies = useCallback(async () => {
    const result = await Data.getMovieList("now_playing");
    setNowPlaying(Data.formatDataAPI(result));
  }, []);

  // Favorite Movies
  const [favoriteMovies, setFavorites] = useState<Movie[]>(
    AppStorage.getFavorites()
  );

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
    getPopularMovies();
    getNowPlayingMovies();
  }, [getPopularMovies, getNowPlayingMovies]);

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, toggleFavoriteList }}>
      <MovieList title="Populares" movies={Favorites.setFavoriteMovies(popularMovies)} />
      <MovieList title="Em Exibição" movies={Favorites.setFavoriteMovies(nowPlayingMovies)} />
      <MovieList isVisible={isLogged} title="Favoritos" movies={favoriteMovies} />
    </FavoritesContext.Provider>
  );
};

export default MoviesProvider;
