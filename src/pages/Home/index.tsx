import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "components/block";
import { Content, Environment } from "./styles";
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
    console.log(JSON.stringify(process.env));

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
      {process.env.REACT_APP_IS_PRODUCTION ? (
        <Environment>Ambiente: Desenvolvimento</Environment>
      ) : null}
    </>
  );
};

export default Home;
