import React from "react";
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
  SectionAction,
  SectionMain,
  TextAction,
  Title,
} from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  return (
    <Container data-testid="login-page">
      <SectionMain>
        <BrandLink to="/">
          <Logo />
          <Title>Cinejump!</Title>
        </BrandLink>
        <Form>
          <Heading>Login</Heading>
          <InputEmail
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required={true}
            validationMessage="Compo obrigatório."
          />
          <InputSenha icon={<FiLock />} label="Senha" />
          <Button clickAction={() => false}>Entrar</Button>
        </Form>
      </SectionMain>
      <SectionAction>
        <HeadingAction>Olá, visitante!</HeadingAction>
        <TextAction>Cadastre-se e conheça as vantagens do Cinejump.</TextAction>
        <Button outlined={true} clickAction={() => false}>
          Criar conta
        </Button>
      </SectionAction>
    </Container>
  );
};

export default Login;
