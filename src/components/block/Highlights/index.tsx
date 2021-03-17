import React from "react";
import { Movie } from "models/Movie";
import {
  Container,
  CardPicture,
  CardMain,
  CardSecondary,
  CardTertiary,
  Description,
  Title,
  Text,
} from "./styles";

interface Props {
  movieList: Movie[]
}

const Highlights = ({ movieList }: Props) => {
  if (movieList.length === 0) {
    return null;
}

  return (
    <Container>
      <CardMain>
        <CardPicture src={movieList[0].backdrop_path} alt="ASD" />
        <Description>
          <Title>{movieList[0].title}</Title>
          <Text>{movieList[0].overview}</Text>
        </Description>
      </CardMain>
      <CardSecondary>
        <CardPicture src={movieList[0].poster_path} alt="ASD" />
        <Description>
          <Title>{movieList[1].title}</Title>
        </Description>
      </CardSecondary>
      <CardTertiary>
        <CardPicture
          src="https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg"
          alt="ASD"
        />
        <Description>
          <Title>{movieList[2].title}</Title>
        </Description>
      </CardTertiary>
    </Container>
  );
};

export default Highlights;