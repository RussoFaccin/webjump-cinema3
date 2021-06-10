import React, { useCallback, useContext } from "react";
import { MovieCard } from "components/element";
import { ScrollDrag } from "components/element";
import { Container, Heading } from "./styles";
import { Props } from "./types";
import { FavoritesContext } from "contexts/Movies";

const MovieList = ({ isVisible = true, title, movies }: Props) => {
  const { toggleFavoriteList } = useContext(FavoritesContext);

  const renderList = useCallback(() => {
    const tmpList = movies.map((movie, index) => {
      return (
        <MovieCard
          key={`${movie.id}_${index}`}
          {...movie}
          actionFavorite={toggleFavoriteList}
        />
      );
    });

    return tmpList.length > 0 ? tmpList : <p>Nenhum filme na lista.</p>;
  }, [movies, toggleFavoriteList]);

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
        {renderList()}
      </ScrollDrag>
    </Container>
  );
};

export default MovieList;
