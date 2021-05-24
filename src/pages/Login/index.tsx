import React from "react";
import {
  BrandLink,
  Container,
  Form,
  FormButton,
  Heading,
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
          <Input
            icon={<FiMail />}
            label="E-mail"
            required={true}
            validationMessage="Compo obrigatório."
          />
          <Input icon={<FiLock />} label="Senha" />
          <FormButton clickAction={() => false}>Entrar</FormButton>
        </Form>
      </SectionMain>
      <SectionAction></SectionAction>
    </Container>
  );
};

export default Login;
