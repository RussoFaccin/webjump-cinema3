import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { AppContent } from "./styles";
import { MovieList } from "components/element";
import { DataService } from "services/data";
import { Movie } from "models/";

const Home = () => {

  // Popular Movies
  
  const [popularMovies, setPopular] = useState<Movie[]>([]);

  const getPopularMovies = useCallback(async () => {
    const result = await DataService.getMovieList("popular");
    setPopular(DataService.formatDataAPI(result));
  }, []);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

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
