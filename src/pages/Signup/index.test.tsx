import React from "react";
import { MemoryRouter } from "react-router-dom";
import Signup from "./";

import { render, RenderResult } from "@testing-library/react";
describe("Signup Page", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  });

  it("Should render the page", () => {
    utils.getByTestId("signup-page");
  });

  it("Should have 'Cinejump!' heading", () => {
    utils.getByRole("heading", { name: /cinejump/i });
  });

  it("Should have 'Bem-vindo, Jumper!' text", () => {
    const expectation = "Bem-vindo, Jumper!";
    utils.getByText(new RegExp(expectation, "i"));
  });

  it("Should have 'Para se manter conectado, faça login com suas credenciais.' text", () => {
    const expectation =
      "Para se manter conectado, faça login com suas credenciais.";
    utils.getByText(new RegExp(expectation, "i"));
  });

  it("Should have 'Login' button", () => {
    utils.getByRole("button", { name: /login/i });
  });

  it("Should have 'Criar conta' text", () => {
    const expectation = "Criar conta";
    utils.getByText(new RegExp(expectation, "i"));
  });

  it("Should have 'Nome, E-mail and Senha' label", () => {
    const labels = ["Nome", "E-mail", "Senha"];
    labels.forEach((label) => {
      utils.getByLabelText(new RegExp(label, "i"));
    });
  });

  it("Should have 'Cadastrar' button", () => {
    utils.getByRole("button", {name: /cadastrar/i});
  });
});
