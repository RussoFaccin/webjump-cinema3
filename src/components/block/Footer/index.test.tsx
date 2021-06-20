import React from "react";
import Footer from "./";
import { BrowserRouter as Router } from "react-router-dom";
import { render, RenderResult } from "@testing-library/react";

describe("Footer Component", () => {
  let utils: RenderResult;
  beforeEach(() => {
    utils = render(
      <Router>
        <Footer />
      </Router>
    );
  });
  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have Cinejump heading", () => {
    const headingText = "Cinejump!";

    utils.getByRole("heading", { name: new RegExp(headingText, "i") });
  });

  it("Should have lnks", () => {
    const linkList = utils.getAllByRole("link");
    expect(linkList.length).toBeGreaterThan(1);
  });
});
