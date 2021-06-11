import React from "react";
import { Props } from "./types";
import { Container, Link, Name } from "./styles";
import { FiUser } from "react-icons/fi";

const ProfileMenu = ({ userName = "" }: Props) => {
  const firstName = userName.split(" ")[0];
  return (
    <Container>
      <Name>Olá, {firstName}.</Name>
      <Link to="/profile"><FiUser />Minha Conta</Link>
    </Container>
  );
};

export default ProfileMenu;
