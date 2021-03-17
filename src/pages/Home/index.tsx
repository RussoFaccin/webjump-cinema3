import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import { MovieList } from "components/element";
import { Highlights } from 'components/block';
import { DataService } from "services/data";
import { Movie } from "models/";

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

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies()
  }, [getPopularMovies, getUpcomingMovies]);

  return (
    <>
      <Header />
      <AppContent>
        <Highlights movieList={upcomingMovies} />
        <MovieList title="Populares" movies={popularMovies} />
      </AppContent>
      <Footer />
    </>
  );
};

export default Home;
