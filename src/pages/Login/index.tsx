import React, { useCallback, useEffect, useState } from "react";
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

  const [isMounted, setMounted] = useState(true);

  const [error, setError] = useState<ErrorType>({
    hasError: false,
    message: "",
  });

  const [formState, setFormState] = useState<FormStateType>({
    "E-mail": "",
    Senha: "",
  });

  const [isLoading, setLoading] = useState(false);

  /**
   * Handle input change action
   */
  const handleChange = useCallback(
    (args) => {
      setFormState({
        ...formState,
        [args.label]: args.value,
      });
    },
    [formState]
  );

  /**
   * Map form data to desired API format
   */
  const mapLoginData = useCallback(() => {
    return {
      email: formState["E-mail"],
      password: formState["Senha"],
    };
  }, [formState]);

  /**
   * Send data to Login API to verify credentials
   */
  const checkCredentials = useCallback(async () => {
    const response = await fetch("https://cinejump-api-dev.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapLoginData()),
    });

    const { user, token } = await response.json();

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
        token,
      });

      history.push("/");
    }

    setLoading(false);
  }, [history, setLogged, setUser, mapLoginData]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      setError({
        ...error,
        hasError: false,
      });

      if (evt.target.checkValidity() && isMounted) {
        setLoading(true);
        checkCredentials();
      }
    },
    [error, checkCredentials, isMounted]
  );

  useEffect(() => {
    return function cleanUp() {
      setMounted(false);
    }
  }, [])

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
          {error.hasError ? <Message data-testid="error-message">{error.message}</Message> : null}
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
