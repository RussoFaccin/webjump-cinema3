import React, { useCallback } from "react";
import { Props } from "./types";
import { Button, Container, Link, Name } from "./styles";
import { FiLogOut, FiHeart, FiUser } from "react-icons/fi";
import { BrowserRouter as Router } from "react-router-dom";

const ProfileMenu = ({
  isVisible = false,
  userName = "",
  actionLogout = () => false,
}: Props) => {
  const firstName = userName.split(" ")[0];

  const setVisibility = useCallback(() => {
    return isVisible ? " profileMenu--active" : "";
  }, [isVisible]);

  return (
    <Router>
      <Container className={setVisibility()}>
        <Name>Olá, {firstName}.</Name>
        <Link to="/profile">
          <FiUser />
          Minha Conta
        </Link>
        <Link to="/favorites">
          <FiHeart />
          Favoritos
        </Link>
        <Button onClick={actionLogout}>
          <FiLogOut />
          Sair
        </Button>
      </Container>
    </Router>
  );
};

export default ProfileMenu;
