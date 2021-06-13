import React, { useCallback, useEffect, useState } from "react";
import { Footer, Header } from "components/block";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Colors } from "shared/enums";
import { useAuth } from "contexts";
import { FormType } from "./types";
import {
  Button,
  Container,
  Content,
  Form,
  FormInput,
  UserCircle,
} from "./styles";

const Profile = () => {
  const { user } = useAuth();

  const [form, setForm] = useState<FormType>({
    Nome: user ? user.name : "",
    "E-mail": user ? user.email : "",
    "Nova Senha": "",
    "Confirmar Senha": "",
  });

  const [isLoading, setLoading] = useState(false);
  const [isMounted, setMounted] = useState(true);

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

      if (evt.target.checkValidity() && isMounted) {
        setLoading(true);
      }
    },
    [isMounted]
  );

  useEffect(() => {
    return function cleanUp() {
      setMounted(false);
    };
  }, []);

  return (
    <Container>
      <Header background={Colors.SECONDARY} />
      <Content>
        <UserCircle />
        <Form onSubmit={handleSubmit} noValidate>
          <FormInput
            icon={<FiUser />}
            label="Nome"
            type="text"
            required={true}
            validationMessage="Campo obrigatório."
            value={form["Nome"]}
            actionInput={handleChange}
          />
          <FormInput
            icon={<FiMail />}
            label="E-mail"
            type="email"
            required={true}
            validationMessage="Campo obrigatório. Preencha um e-mail válido."
            value={form["E-mail"]}
            actionInput={handleChange}
          />
          <FormInput
            icon={<FiLock />}
            label="Nova Senha"
            type="password"
            required={true}
            validationMessage="Campo obrigatório."
            actionInput={handleChange}
          />
          <FormInput
            icon={<FiLock />}
            label="Confirmar Senha"
            type="password"
            required={true}
            validationMessage="Campo obrigatório."
            value={form["Confirmar Senha"]}
            actionInput={handleChange}
          />
          <Button
            outlined={true}
            background={Colors.SECONDARY}
            clickAction={() => false}
            isLoading={isLoading}
          >
            ATUALIZAR PERFIL
          </Button>
        </Form>
      </Content>
      <Footer background={Colors.SECONDARY} />
    </Container>
  );
};

export default Profile;
