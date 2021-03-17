import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import { MovieList } from "components/element";
import { Highlights } from "components/block";
import { DataService } from "services/data";
import { Movie } from "models/";
import { ContextType, FavoritesContext } from "contexts/Favorites";

const Home = () => {
  // Popular Movies
  const [popularMovies, setPopular] = useState<Movie[]>([]);

  const getPopularMovies = useCallback(async () => {
    const result = await DataService.getMovieList("popular");
    setPopular(DataService.formatDataAPI(result));
  }, []);

  // Upcoming Movies
  const [upcomingMovies, setUpcoming] = useState<Movie[]>([]);

  const getUpcomingMovies = useCallback(async () => {
    const result = await DataService.getMovieList("upcoming");
    setUpcoming(DataService.formatDataAPI(result));
  }, []);

  // Now Playing Movies
  const [nowPlayingMovies, setNowPlaying] = useState<Movie[]>([]);

  const getNowPlayingMovies = useCallback(async () => {
    const result = await DataService.getMovieList("now_playing");
    setNowPlaying(DataService.formatDataAPI(result));
  }, []);

  // Favorites Movies
  const [favoriteMovies, setFavorites] = useState<Movie[]>([]);

  const toggleFavoriteList = (movie: Movie) => {
    console.log("toggleFavoriteList", movie);
  };

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getNowPlayingMovies();
  }, [getPopularMovies, getUpcomingMovies, getNowPlayingMovies]);

  const favoriteData: ContextType = {
    favoriteMovies,
    toggleFavoriteList
  }

  return (
    <>
      <Header />
      <AppContent>
        <Highlights movieList={upcomingMovies} />
        <FavoritesContext.Provider value={favoriteData}>
          <MovieList title="Populares" movies={popularMovies} />
          <MovieList title="Em Exibição" movies={nowPlayingMovies} />
        </FavoritesContext.Provider>
      </AppContent>
      <Footer />
    </>
  );
};

export default Home;
