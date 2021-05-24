import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, RenderResult } from "@testing-library/react";
import Header from "./";

describe("Header Component", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
        <Router>
            <Header />
        </Router>
    );
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have Cinejump! heading", () => {
    const headingText = "Cinejump!"
    utils.getAllByRole("heading", {name: new RegExp(headingText, "i")});
  });

  it("Should have Filmes & Series links", () => {
    utils.getAllByRole("link", {name: /Filmes/i});
    utils.getAllByRole("link", {name: /Series/i});
  });
});
