import React from "react";
import { Movie } from "shared/types";
import { Colors } from "shared/enums";
import MovieCard from "./";
import { fireEvent, render, RenderResult } from "@testing-library/react";

describe("Movie Card Component", () => {
  const movie: Movie = {
    backdrop_path: "/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
    id: 520763,
    overview:
      "Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.",
    poster_path:
      "https://image.tmdb.org/t/p/w92/wYqmuxd9jNFLf3gtQY5vbAUgiGk.jpg",
    title: "Um Lugar Silencioso - Parte II",
  };

  let utils: RenderResult;
  const actionFavorite = jest.fn();

  beforeEach(() => {
    utils = render(<MovieCard {...movie} actionFavorite={actionFavorite} />);
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should render the image poster", () => {
    const { src } = utils.getByRole("img") as HTMLImageElement;

    expect(src).toBe(movie.poster_path);
  });

  it("Should render favorite icon active", () => {
    movie.favorite = true;

    utils.rerender(<MovieCard {...movie} actionFavorite={actionFavorite} />);

    const icon = utils.getByRole("button").querySelector("svg");

    expect(icon).toHaveStyle({ color: Colors.PRIMARY });
  });

  it("Should call action on favorite click", () => {
    const favButton = utils.getByRole("button");
    fireEvent.click(favButton);

    expect(actionFavorite).toBeCalled();
  });

  it("Should return movie on favorite", () => {
    const element = utils.getByRole("button");
    fireEvent.click(element);

    const ret: Movie = actionFavorite.mock.calls[0][0];

    expect(ret.id).toBe(movie.id);
  })

  it("Should change favorite icon color on click", () => {
    const favButton = utils.getByRole("button");

    fireEvent.click(favButton);

    const icon = favButton.querySelector("svg");

    let expectation;

    if (movie.favorite ) {
      expectation = { color: 'black' };
    } else {
      expectation = { color: Colors.PRIMARY }
    }

    expect(icon).toHaveStyle(expectation);
  });
});
