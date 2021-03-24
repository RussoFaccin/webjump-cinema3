import React from "react";
import { MovieCard } from "components/element";
import { ScrollDrag } from "components/element";
import { Container, Heading } from "./styles";
import { Props } from './types';

const MovieList = ({ title, movies }: Props) => {
  const tmpList = movies.map((movie, index) => {
    return <MovieCard key={`${movie.id}_${index}`} {...movie} />;
  });



  return (
    <Container>
      <Heading>{title}</Heading>
      <ScrollDrag>{tmpList.length > 0 ? tmpList : <p>Nenhum filme na lista.</p>}</ScrollDrag>
    </Container>
  );
};

export default MovieList;
