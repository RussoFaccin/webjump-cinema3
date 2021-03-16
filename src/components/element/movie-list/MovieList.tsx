import React from "react";
import { Movie } from "models/Movie";
import MovieCard from "components/element/movie-card";
import ScrollDrag from 'components/element/scroll-drag';

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export const MovieList = ({ title, movies }: MovieListProps) => {
  const tmpList = movies.map((movie, index) => {
    return <MovieCard key={`${movie.id}_${index}`} {...movie} />;
  });

  return (
    <ScrollDrag>{tmpList}</ScrollDrag>
  );
};
