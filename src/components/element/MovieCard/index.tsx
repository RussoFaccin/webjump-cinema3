import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Heading, CardPoster, HeartIcon } from "./styles";
import { Movie } from "models/Movie";
import { FavoritesContext } from "contexts/Favorites";

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

    if (found) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [state.id, favoriteMovies]);

  useEffect(() => {
    checkFavorite();
  }, [favoriteMovies, checkFavorite]);

  return (
    <Container>
      <Heading>{title}</Heading>
      <CardPoster src={state.poster_path} alt={state.title} />
      <HeartIcon
        color={favorite ? "#e83f5b" : "black"}
        onClick={toggleFavorite}
      />
    </Container>
  );
};

export default MovieCard;
