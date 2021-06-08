import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { Content } from "./styles";
import { Highlights } from "components/block";
import { Data } from "services";
import { Movie } from "shared/types";
import { MoviesProvider } from "contexts";

const Home = () => {
  // Upcoming Movies
  const [upcomingMovies, setUpcoming] = useState<Movie[]>([]);

  const getUpcomingMovies = useCallback(async () => {
    const result = await Data.getMovieList("upcoming");
    setUpcoming(Data.formatDataAPI(result));
  }, []);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  return (
    <>
      <Header />
      <Content>
        <Highlights movieList={upcomingMovies} />
        <MoviesProvider />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
