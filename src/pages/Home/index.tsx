import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import MovieList from 'components/element/movie-list';
import { DataService } from 'services/data';
import { Movie } from 'models/';

const Home = () => {
  const [popularMovies, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies();
  });
  
  const getPopularMovies = useCallback(async() => {
    const result = await DataService.getMovieList('popular');
    setPopular(DataService.formatDataAPI(result));
  }, []);

  return (
    <>
      <Header />
      <AppContent>
        <MovieList title="Populares" movies={popularMovies} />
      </AppContent>
      <Footer />
    </>
  );
};

export default Home;
