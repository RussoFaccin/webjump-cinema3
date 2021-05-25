import React from "react";
import {
  BrandLink,
  Container,
  Form,
  Button,
  Heading,
  InputEmail,
  Logo,
  SectionAction,
  SectionMain,
  Title,
} from "./styles";
import { Input } from "components/element/";
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
            required={true}
            validationMessage="Compo obrigatório."
          />
          <Input icon={<FiLock />} label="Senha" />
          <Button clickAction={() => false}>Entrar</Button>
        </Form>
      </SectionMain>
      <SectionAction></SectionAction>
    </Container>
  );
};

export default Login;
