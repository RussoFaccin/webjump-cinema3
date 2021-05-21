import React from "react";
import { Meta, Story } from "@storybook/react";
import MovieCard from "./";
import { Movie } from "shared/types";
import { Props } from "./types";

const movie: Movie = {
  backdrop_path: "/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
  id: 520763,
  overview:
    "Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.",
  poster_path:
    "    https://image.tmdb.org/t/p/w92/wYqmuxd9jNFLf3gtQY5vbAUgiGk.jpg",
  title: "Um Lugar Silencioso - Parte II",
};

const Template: Story<Movie & Props> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...movie,
  actionFavorite() {
    console.log("Favorited");
  },
};

export default {
  title: "Components/MovieCard",
  component: MovieCard,
  argTypes: {
    poster_path: {
      type: { poster_path: "text", required: true },
      control: { type: "text" },
      name: "Poster url",
    },
    favorite: {
      control: { type: "boolean" },
    },
    backdrop_path: {
      type: { backdrop_path: "string", required: false },
      control: { type: "text" },
      name: "Backdrop url",
    },
    actionFavorite: { action: 'click' }
  },
} as Meta;
