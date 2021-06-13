import React, { useCallback, useState } from "react";
import { FormStateType, ErrorType } from "./types";
import { useAuth } from "contexts";
import { useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import {
  BrandLink,
  Container,
  Form,
  Button,
  Heading,
  HeadingAction,
  InputEmail,
  InputSenha,
  Logo,
  Message,
  SectionAction,
  SectionMain,
  TextAction,
  Title,
} from "./styles";

const Login = () => {
  const history = useHistory();
  const {
    actions: { setLogged, setUser },
  } = useAuth();

  const [error, setError] = useState<ErrorType>({
    hasError: false,
    message: "",
  });

  const [formState, setFormState] = useState<FormStateType>({
    "E-mail": "",
    Senha: "",
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = useCallback(
    (args) => {
      setFormState({
        ...formState,
        [args.label]: args.value,
      });
    },
    [formState]
  );

  const mapLoginData = useCallback(() => {
    return {
      email: formState["E-mail"],
      password: formState["Senha"],
    };
  }, [formState]);

  const checkCredentials = useCallback(async () => {
    const response = await fetch("https://cinejump-api.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapLoginData()),
    });

    const { user } = await response.json();

    if (!response.ok) {
      setError({
        hasError: true,
        message: "E-mail e/ou Senha incorretos. Verifique as credenciais.",
      });
    } else {
      setLogged(true);

      setUser({
        name: user.name,
        email: user.email,
        token: user.token,
      });

      history.push("/");
    }

    setLoading(false);
  }, [history, setLogged, setUser, mapLoginData]);

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      setError({
        ...error,
        hasError: false,
      });

      setLoading(true);

      if (evt.target.checkValidity()) {
        checkCredentials();
      }
    },
    [error, checkCredentials]
  );

  return (
    <Container data-testid="login-page">
      <SectionMain>
        <BrandLink to="/">
          <Logo />
          <Title>Cinejump!</Title>
        </BrandLink>
        <Form onSubmit={handleSubmit} noValidate>
          <Heading>Login</Heading>
          <InputEmail
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required={true}
            validationMessage="Campo obrigatório."
            value={formState["E-mail"]}
            actionInput={handleChange}
          />
          <InputSenha
            icon={<FiLock />}
            label="Senha"
            type="password"
            required
            validationMessage="Campo obrigatório."
            value={formState["Senha"]}
            actionInput={handleChange}
          />
          {error.hasError ? <Message>{error.message}</Message> : null}
          <Button clickAction={() => false} isLoading={isLoading}>
            Entrar
          </Button>
        </Form>
      </SectionMain>
      <SectionAction>
        <HeadingAction>Olá, visitante!</HeadingAction>
        <TextAction>Cadastre-se e conheça as vantagens do Cinejump.</TextAction>
        <Button outlined={true} clickAction={() => history.push("/signup")}>
          Criar conta
        </Button>
      </SectionAction>
    </Container>
  );
};

export default Login;
