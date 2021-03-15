import React from "react";
import { Movie } from 'models/Movie';
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
    movieList: [Movie, Movie, Movie];
}

export const Highlights = ({movieList}: Props) => {
  return (
    <Container>
      <CardMain>
        <CardPicture
          src={movieList[0].backdrop_path}
          alt="ASD"
        />
        <Description>
          <Title>{movieList[0].title}</Title>
          <Text></Text>
        </Description>
      </CardMain>
      <CardSecondary>
        <CardPicture
          src="https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg"
          alt="ASD"
        />
        <Description>
          <Title>Raya and the Last Dragon</Title>
        </Description>
      </CardSecondary>
      <CardTertiary>
        <CardPicture
          src="https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg"
          alt="ASD"
        />
        <Description>
          <Title>Raya and the Last Dragon</Title>
        </Description>
      </CardTertiary>
    </Container>
  );
};
