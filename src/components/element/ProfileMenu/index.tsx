import React, { useCallback, useEffect, useState } from "react";
import { Button, Container, Link, Name } from "./styles";
import { FiLogOut, FiHeart, FiUser } from "react-icons/fi";
import { useAuth } from "contexts";
import { useHistory } from "react-router-dom";
import { Props } from "./types";

const ProfileMenu = ({ isVisible = true, userName = "" }: Props) => {
  const {
    user,
    actions: { setLogged },
  } = useAuth();

  // const name = 
  const firstName = (userName !== "" ? userName : user?.name).split(" ")[0];

  const [isActive, setActive] = useState(isVisible);

  const history = useHistory();

  const setVisibility = useCallback(() => {
    return isActive ? " --active" : "";
  }, [isActive]);

  const actionLogout = useCallback(() => {
    setLogged(false);
    setActive(!isActive);
    history.push("/");
  }, [isActive, setLogged, history]);

  useEffect(() => {
    setActive(isVisible);
  }, [isVisible]);

  return (
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
  );
};

export default ProfileMenu;
