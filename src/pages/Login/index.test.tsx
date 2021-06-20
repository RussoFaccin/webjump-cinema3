import React from "react";
import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { AuthProvider } from "contexts";
import Login from "./";

describe("Login page component", () => {
  let utils: RenderResult;
  let testHistory: any, testLocation: any;

  beforeEach(() => {
    utils = render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/login"]}>
          <Login />
          <Route
            path="*"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
              return null;
            }}
          />
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

  it("Should navigate to Signup Page", () => {
    const buttonSignUp = utils.getByRole("button", { name: /criar conta/i });
    fireEvent.click(buttonSignUp);
    
    expect(testLocation.pathname).toMatch(/signup/gi);
  });

  it("Should show error message when credentials invalid", async () => {
    const fldEmail = utils.getByLabelText(/e-mail/i);
    const fldSenha = utils.getByLabelText(/senha/i);
    const btnSubmit = utils.getByRole("button", { name: /entrar/i });

    fireEvent.input(fldEmail, { target: { value: "asd@asd.com.br" } });
    fireEvent.input(fldSenha, { target: { value: "asd" } });
    fireEvent.click(btnSubmit);

    await utils.findByTestId("error-message");
  });

  it("Should navigate to Home Page when credentials valid", async () => {
    const fldEmail = utils.getByLabelText(/e-mail/i);
    const fldSenha = utils.getByLabelText(/senha/i);
    const btnSubmit = utils.getByRole("button", { name: /entrar/i });

    fireEvent.input(fldEmail, { target: { value: "90lucasgabriel@gmail.com" } });
    fireEvent.input(fldSenha, { target: { value: "123456" } });
    fireEvent.click(btnSubmit);

    await waitFor(() => {
      expect(testLocation.pathname).toBe("/");
    });
  })
});
