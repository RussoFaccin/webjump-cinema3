import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "contexts";
import Login from "./";

describe("Login page component", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <AuthProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </AuthProvider>
    );
  });

  it("Should render the page", () => {
    utils.getByTestId("login-page");
  });

  it("Should have 'Cinejump' heading", () => {
    utils.getByRole("heading", { name: /Cinejump/i });
  });

  it('Should have "Login" heading', () => {
    utils.getByRole("heading", { name: /login/i });
  });

  it("Should have'E-mail' & 'Senha' label", () => {
    utils.getByLabelText(/e-mail/i);
    utils.getByLabelText(/senha/i);
  });

  it("Should have 'Entrar' and 'Criar Conta' butons", () => {
    utils.getByRole("button", { name: /entrar/i });
    utils.getByRole("button", { name: /criar conta/i });
  });

  it("Should have 'Olá, visitante' text", () => {
    utils.getByText(/Olá, visitante/i);
  });

  it("Should have 'Cadastre-se e conheça as vantagens do Cinejump.' text", () => {
    utils.getByText(/Cadastre-se e conheça as vantagens do Cinejump/i);
  });
});
