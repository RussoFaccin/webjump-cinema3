import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "contexts";
import { BiSearch } from "react-icons/bi";
import { Props } from "./types";
import { Colors } from "shared/enums";
import {
  Container,
  Content,
  Navigation,
  Link,
  MenuContainer,
  SubNav,
  BrandLink,
  Logo,
  ProfileMenu,
  Title,
} from "./styles";
import { CircleButton } from "components/element";
import { CgProfile } from "react-icons/cg";

const Header = ({
  background = Colors.PRIMARY,
  textColor = Colors.WHITE,
}: Props) => {
  const { isLogged } = useAuth();
  const history = useHistory();

  const [isMenuActive, setMenuActive] = useState(false);

  const handleProfile = useCallback(() => {
    if (isLogged) {
      setMenuActive(!isMenuActive);
    } else {
      history.push("/login");
    }
  }, [history, isLogged, isMenuActive, setMenuActive]);

  return (
    <Container background={background} textColor={textColor}>
      <Content>
        <Navigation>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Series</Link>
        </Navigation>
        <BrandLink to="/">
          <Logo fill={textColor} />
          <Title>Cinejump!</Title>
        </BrandLink>
        <SubNav>
          <CircleButton text="Search">
            <BiSearch size="70%" color={textColor} />
          </CircleButton>
          <CircleButton text="Profile" onClick={handleProfile}>
            <CgProfile size="70%" color={textColor} />
          </CircleButton>
        </SubNav>
      </Content>
      <MenuContainer>
        <ProfileMenu isVisible={isMenuActive} />
      </MenuContainer>
    </Container>
  );
};

export default Header;
