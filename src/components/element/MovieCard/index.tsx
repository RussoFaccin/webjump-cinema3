import React, { useCallback, useContext, useEffect, useState } from "react";
import { Container, Heading, CardPoster, HeartIcon } from "./styles";
import { Movie } from "models/Movie";
import { FavoritesContext } from "contexts/Favorites";

const MovieCard = ({
  id,
  title,
  poster_path: poster = "",
  favorite = false,
}: Movie) => {
  const context = useContext(FavoritesContext);

  const [state, setState] = useState({
    id,
    title,
    poster,
    favorite,
  });

  const toggleFavorite = () => {
    setState({
      ...state,
      favorite: !state.favorite,
    });

    if (context) {
      context.toggleFavoriteList(state);
    }
  };

  const checkFavorite = useCallback(() => {
    const found = context?.favoriteMovies.find((movie) => {
      return movie.id === state.id;
    });

    if (found) {
      setState({
        ...state,
        favorite: true,
      });
    }
  }, []);

  useEffect(() => {
    checkFavorite();
  }, [checkFavorite]);

  return (
    <Container>
      <Heading>{title}</Heading>
      <CardPoster src={state.poster} alt={state.title} />
      <HeartIcon
        color={state.favorite ? "#e83f5b" : "black"}
        onClick={toggleFavorite}
      />
    </Container>
  );
};

export default MovieCard;
