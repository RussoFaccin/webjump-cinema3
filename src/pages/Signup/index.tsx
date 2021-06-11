import React from "react";
import { useHistory } from "react-router-dom";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import {
  BrandLink,
  Button,
  Container,
  Form,
  Heading,
  HeadingAction,
  Input,
  Logo,
  SectionAction,
  SectionMain,
  TextAction,
  Title,
} from "./styles";

const Signup = () => {
  const history = useHistory();

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
        <Form>
          <Heading>Criar conta</Heading>
          <Input
            icon={<FiUser />}
            label="Nome"
            type="text"
            required={true}
            validationMessage="Compo obrigatório."
          />
          <Input
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required={true}
            validationMessage="Compo obrigatório."
          />
          <Input icon={<FiLock />} label="Senha" />
          <Button clickAction={() => false}>Cadastrar</Button>
        </Form>
      </SectionMain>
    </Container>
  );
};

export default Signup;
