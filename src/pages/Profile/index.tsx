import React from "react";
import { Footer, Header } from "components/block";
import {
  Button,
  Container,
  Content,
  Form,
  FormInput,
  UserCircle,
} from "./styles";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Colors } from "shared/enums";

const Profile = () => {
  return (
    <Container>
      <Header />
      <Content>
        <UserCircle />
        <Form>
          <FormInput
            icon={<FiUser />}
            label="Nome"
            type="text"
            required
            validationMessage="Campo obrigatório."
          />
          <FormInput
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required
            validationMessage="Campo obrigatório. Preencha um e-mail válido."
          />
          <FormInput icon={<FiLock />} label="Nova Senha" type="password" />
          <FormInput icon={<FiLock />} label="Confirmar Senha" type="password" />
          <Button
            outlined={true}
            background={Colors.SECONDARY}
            clickAction={() => false}
          >
            ATUALIZAR PERFIL
          </Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
