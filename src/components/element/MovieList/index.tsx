import React from "react";
import { Movie } from "models/Movie";
import { MovieCard } from "components/element";
import ScrollDrag from "components/element/scroll-drag";
import { Container, Heading } from "./styles";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
  const tmpList = movies.map((movie, index) => {
    return <MovieCard key={`${movie.id}_${index}`} {...movie} />;
  });

  return (
    <Container>
      <Heading>{title}</Heading>
      <ScrollDrag>{tmpList}</ScrollDrag>
    </Container>
  );
};

export default MovieList;
