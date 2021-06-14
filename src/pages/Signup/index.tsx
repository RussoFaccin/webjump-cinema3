import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { ErrorType, FormType } from "./types";
import {
  BrandLink,
  Button,
  Container,
  Form,
  Heading,
  HeadingAction,
  Input,
  Logo,
  Message,
  SectionAction,
  SectionMain,
  TextAction,
  Title,
} from "./styles";

const Signup = () => {
  const history = useHistory();

  const [error, setError] = useState<ErrorType>({
    hasError: false,
    message: "",
  });

  const [form, setForm] = useState<FormType>({
    Nome: "",
    "E-mail": "",
    Senha: "",
  });

  const [isLoading, setLoading] = useState(false);

  const mapSignupData = useCallback(() => {
    return {
      name: form["Nome"],
      email: form["E-mail"],
      password: form["Senha"],
    };
  }, [form]);

  const postData = useCallback(async () => {
    const response = await fetch("https://cinejump-api-dev.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapSignupData()),
    });

    const result = await response.json();

    if (!response.ok) {
      setError({
        ...error,
        hasError: true,
        message: result.error,
      });
    } else {
      history.push("/login");
    }

    setLoading(false);
  }, [error, history, mapSignupData]);

  const handleChange = useCallback(
    (input) => {
      setForm({
        ...form,
        [input.label]: input.value,
      });
    },
    [form]
  );

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      setError({
        ...error,
        hasError: false,
      });

      if (evt.target.checkValidity()) {
        setLoading(true);
        postData();
      }
    },
    [error, postData]
  );

  return (
    <Container data-testid="signup-page">
      <SectionAction>
        <HeadingAction>Bem-vindo, Jumper!</HeadingAction>
        <TextAction>
          Para se manter conectado, faça login com suas credenciais.
        </TextAction>
        <Button outlined={true} clickAction={() => history.push("/login")}>
          Login
        </Button>
      </SectionAction>
      <SectionMain>
        <BrandLink to="/">
          <Logo />
          <Title>Cinejump!</Title>
        </BrandLink>
        <Form onSubmit={handleSubmit} noValidate>
          <Heading>Criar conta</Heading>
          <Input
            icon={<FiUser />}
            label="Nome"
            type="text"
            required={true}
            validationMessage="Campo obrigatório."
            actionInput={handleChange}
            value={form["Nome"]}
          />
          <Input
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required={true}
            validationMessage="Campo obrigatório."
            actionInput={handleChange}
            value={form["E-mail"]}
          />
          <Input
            icon={<FiLock />}
            label="Senha"
            type="password"
            required
            validationMessage="Campo obrigatório."
            actionInput={handleChange}
            value={form["Senha"]}
          />
          {error.hasError ? <Message>{error.message}</Message> : null}
          <Button clickAction={() => false} isLoading={isLoading}>
            Cadastrar
          </Button>
        </Form>
      </SectionMain>
    </Container>
  );
};

export default Signup;
