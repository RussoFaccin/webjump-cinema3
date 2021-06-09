import React from "react";
import Profile from "./index";
import { render, RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Profile Page", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
  });

  it("Should render the page", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have Footer and Header Brand", () => {
    const brands = utils.getAllByRole("heading", { name: /cinejump!/i });
    expect(brands.length).toBe(2);
  });

  it("Should have 'Nome', 'E-mail', 'Nova Senha' e 'Confirmar Senha' inputs", () => {
    const labels = ["Nome", "E-mail", "Nova Senha", "Confirmar Senha"];
    labels.forEach((label) => {
      utils.getByLabelText(new RegExp(label, "i"));
    });
  });

  it("Should have 'ATUALIZAR PERFIL' Button", () => {
    utils.getByRole("button", {name:/atualizar perfil/i});
  })
});
