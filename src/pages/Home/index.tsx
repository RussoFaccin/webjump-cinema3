import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import { MovieList } from "components/element";
import { Highlights } from "components/block";
import { Data } from "services";
import { Movie } from "models/";
import { FavoritesProvider } from "contexts";

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

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getNowPlayingMovies();
  }, [getPopularMovies, getUpcomingMovies, getNowPlayingMovies]);

  return (
    <>
      <Header />
      <AppContent>
        <Highlights movieList={upcomingMovies} />
        <FavoritesProvider>
          <MovieList title="Populares" movies={popularMovies} />
          <MovieList title="Em Exibição" movies={nowPlayingMovies} />
        </FavoritesProvider>
      </AppContent>
      <Footer />
    </>
  );
};

export default Home;
