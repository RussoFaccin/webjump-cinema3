import {
  Container,
  Content,
  Navigation,
  Link,
  SubNav,
  BrandLink,
  Logo,
  Title,
} from "./styles";
import { CircleButton } from "components/element";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { Props } from "./types";
import { Colors } from "shared/enums";

const Header = ({
  background = Colors.PRIMARY,
  textColor = Colors.WHITE,
}: Props) => {
  return (
    <Container background={background} textColor={textColor}>
      <Content>
        <Navigation>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Series</Link>
        </Navigation>
        <BrandLink href="/">
          <Logo fill={textColor} />
          <Title>Cinejump!</Title>
        </BrandLink>
        <SubNav>
          <CircleButton text="Search">
            <BiSearch size="70%" color={textColor} />
          </CircleButton>
          <CircleButton text="Profile">
            <CgProfile size="70%" color={textColor} />
          </CircleButton>
        </SubNav>
      </Content>
    </Container>
  );
};

export default Header;
