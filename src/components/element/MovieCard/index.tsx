import React, { useCallback, useEffect, useState } from "react";
import { Button, Container, Heading, Poster, HeartIcon } from "./styles";
import { Movie } from "shared/types";
import { Props } from "./types";
import { Colors } from "shared/enums";

const MovieCard = ({
  id,
  title,
  poster_path,
  backdrop_path,
  overview,
  favorite,
  actionFavorite,
}: Movie & Props) => {
  const [isFavorite, setFavorite] = useState(favorite);

  const toggleFavorite = useCallback(() => {
    setFavorite(!isFavorite);

    const movie = {
      id,
      title,
      poster_path,
      backdrop_path,
      overview,
      favorite: !isFavorite,
    };

    actionFavorite(movie);
  }, [
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    actionFavorite,
    isFavorite,
  ]);

  useEffect(() => {
    setFavorite(favorite);
  }, [favorite]);

  return (
    <Container>
      <Heading>{title}</Heading>
      <Poster src={poster_path} alt={title} />
      <Button onClick={toggleFavorite}>
        <HeartIcon color={isFavorite ? Colors.PRIMARY : Colors.BLACK} />
      </Button>
    </Container>
  );
};

export default MovieCard;
