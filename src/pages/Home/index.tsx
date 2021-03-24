import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import { MovieList } from "components/element";
import { Highlights } from "components/block";
import { Data } from 'services';
import { Movie } from "models/";
import { FavoritesContext } from "contexts/Favorites";
import { AppStorage } from "services";

const Home = () => {
  // Popular Movies
  const [popularMovies, setPopular] = useState<Movie[]>([]);

  const getPopularMovies = useCallback(async () => {
    const result = await Data.getMovieList("popular");
    setPopular(Data.formatDataAPI(result));
  }, []);

  // Upcoming Movies
  const [upcomingMovies, setUpcoming] = useState<Movie[]>([]);

  const getUpcomingMovies = useCallback(async () => {
    const result = await Data.getMovieList("upcoming");
    setUpcoming(Data.formatDataAPI(result));
  }, []);

  // Now Playing Movies
  const [nowPlayingMovies, setNowPlaying] = useState<Movie[]>([]);

  const getNowPlayingMovies = useCallback(async () => {
    const result = await Data.getMovieList("now_playing");
    setNowPlaying(Data.formatDataAPI(result));
  }, []);

  // Favorites Movies
  const [favoriteMovies, setFavorites] = useState<Movie[]>([]);

  const toggleFavoriteList = useCallback(
    (movie: Movie) => {
      const tmpList = [...favoriteMovies];
      const foundIndex = favoriteMovies.findIndex((movieEntry) => {
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

  const getFavotireMovies = useCallback(() => {
    const favorite = AppStorage.getFavorites();
    setFavorites(favorite);
  }, []);

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getNowPlayingMovies();
  }, [
    getPopularMovies,
    getUpcomingMovies,
    getNowPlayingMovies
  ]);

  useEffect(() => {
    getFavotireMovies();
  }, [getFavotireMovies]);

  return (
    <>
      <Header />
      <AppContent>
        <Highlights movieList={upcomingMovies} />
        <FavoritesContext.Provider
          value={{ favoriteMovies, toggleFavoriteList }}
        >
          <MovieList title="Populares" movies={popularMovies} />
          <MovieList title="Em Exibição" movies={nowPlayingMovies} />
          <MovieList title="Favoritos" movies={favoriteMovies} />
        </FavoritesContext.Provider>
      </AppContent>
      <Footer />
    </>
  );
};

export default Home;
