import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Heading, Poster, HeartIcon } from "./styles";
import { Movie } from "shared/types";
import { FavoritesContext } from "contexts/Favorites";
import { Colors } from 'shared/enums';

const MovieCard = ({ id, title, poster_path }: Movie) => {
  const { favoriteMovies, toggleFavoriteList } = useContext(FavoritesContext);

  const [state] = useState({
    id,
    title,
    poster_path,
  });

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    toggleFavoriteList(state);
  };

  const checkFavorite = useCallback(() => {
    const found = favoriteMovies.find((movie) => {
      return movie.id === state.id;
    });

    setFavorite(found ? true : false);

  }, [state.id, favoriteMovies]);

  useEffect(() => {
    checkFavorite();
  }, [favoriteMovies, checkFavorite]);

  return (
    <Container>
      <Heading>{title}</Heading>
      <Poster src={state.poster_path} alt={state.title} />
      <HeartIcon
        color={favorite ? Colors.PRIMARY : Colors.BLACK}
        onClick={toggleFavorite}
      />
    </Container>
  );
};

export default MovieCard;
