import {
  HeaderElement,
  HeaderContent,
  HeaderNavigation,
  NavLink,
  HeaderSubnav,
  AppBrand,
  AppLogo,
  AppTitle,
} from "./styles";
import CircleButton from "components/element/circle-button";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <HeaderElement>
      <HeaderContent>
        <HeaderNavigation order={1}>
          <NavLink to="/filmes">Filmes</NavLink>
          <NavLink to="/series">Series</NavLink>
        </HeaderNavigation>
        <AppBrand href="/" order={2}>
          <AppLogo />
          <AppTitle>Cinejump!</AppTitle>
        </AppBrand>
        <HeaderSubnav order={3}>
          <CircleButton text="Search">
            <BiSearch size="70%" color="white" />
          </CircleButton>
          <CircleButton text="Profile">
            <CgProfile size="70%" color="white" />
          </CircleButton>
        </HeaderSubnav>
      </HeaderContent>
    </HeaderElement>
  );
};

export default Header;