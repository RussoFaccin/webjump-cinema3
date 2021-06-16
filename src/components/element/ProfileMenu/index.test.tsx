import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "contexts";
import ProfileMenu from "./";

describe("ProfileMenu Component", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <AuthProvider>
        <Router>
          <ProfileMenu />
        </Router>
      </AuthProvider>
    );
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have 'Olá, <Nome>' text", () => {
    const userName = "John Doe";
    utils.rerender(
      <AuthProvider>
        <Router>
          <ProfileMenu userName={userName} />
        </Router>
      </AuthProvider>
    );
    expect(utils.getByText("Olá, John.")).toBeInTheDocument();
  });

  it("Should have 'Minha Conta' link", () => {
    const linkText = "Minha Conta";
    utils.getByRole("link", { name: new RegExp(linkText, "i") });
  });

  it("Should have 'Favoritos' link", () => {
    const linkText = "Favoritos";
    utils.getByRole("link", { name: new RegExp(linkText, "i") });
  });

  it("Should have 'Sair' button", () => {
    const buttonText = "Sair";
    utils.getByRole("button", { name: new RegExp(buttonText, "i") });
  });
});
