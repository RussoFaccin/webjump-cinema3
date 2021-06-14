import React from "react";
import { Props } from "./types";
import { Button, Container, Link, Name } from "./styles";
import { FiLogOut, FiHeart, FiUser } from "react-icons/fi";
import { BrowserRouter as Router } from "react-router-dom";

const ProfileMenu = ({ userName = "" }: Props) => {
  const firstName = userName.split(" ")[0];
  return (
    <Router>
      <Container>
        <Name>Olá, {firstName}.</Name>
        <Link to="/profile">
          <FiUser />
          Minha Conta
        </Link>
        <Link to="/profile">
          <FiHeart />
          Favoritos
        </Link>
        <Button>
          <FiLogOut />
          Sair
        </Button>
      </Container>
    </Router>
  );
};

export default ProfileMenu;
