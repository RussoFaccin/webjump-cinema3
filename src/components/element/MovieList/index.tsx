import React, { useCallback, useContext } from "react";
import { MovieCard } from "components/element";
import { FlatList, ScrollDrag } from "components/element";
import { Container, Heading } from "./styles";
import { Props } from "./types";
import { FavoritesContext } from "contexts/Movies";

const MovieList = ({ isVisible = true, title, movies }: Props) => {
  const { toggleFavoriteList } = useContext(FavoritesContext);

  const renderItem = useCallback(
    (movie, index) => {
      return (
        <MovieCard
          key={`${movie.id}_${index}`}
          {...movie}
          actionFavorite={toggleFavoriteList}
        />
      );
    },
    [toggleFavoriteList]
  );

  if (!movies || movies.length === 0) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <Heading>{title}</Heading>
      <ScrollDrag>
        <FlatList data={movies} renderItem={renderItem} />
      </ScrollDrag>
    </Container>
  );
};

export default MovieList;
