import React from "react";
import { Props } from "./types";
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

const Highlights = ({ movieList }: Props) => {
  if (movieList.length === 0) {
    return null;
  }

  return (
    <Container>
      <CardMain>
        <CardPicture src={movieList[0].backdrop_path} alt={movieList[0].title} />
        <Description>
          <Title>{movieList[0].title}</Title>
          <Text>{movieList[0].overview}</Text>
        </Description>
      </CardMain>
      <CardSecondary>
        <CardPicture src={movieList[1].backdrop_path} alt={movieList[1].title} />
        <Description>
          <Title>{movieList[1].title}</Title>
        </Description>
      </CardSecondary>
      <CardTertiary>
        <CardPicture
          src={movieList[2].backdrop_path}
          alt={movieList[2].title}
        />
        <Description>
          <Title>{movieList[2].title}</Title>
        </Description>
      </CardTertiary>
    </Container>
  );
};

export default Highlights;
