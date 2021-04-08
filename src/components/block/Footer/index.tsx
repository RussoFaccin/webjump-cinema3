import React from "react";
import {
  Container,
  BrandLink,
  Logo,
  Heading,
  Nav,
  Link,
  StandardLink,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <BrandLink to="/">
        <Logo />
        <Heading>Cinejump!</Heading>
      </BrandLink>
      <Nav>
        <StandardLink href="http://www.rodrigorusso.com.br" target="blank">
          Desnvolvido por Rodrigo Russo
        </StandardLink>
        <Link to="/">Proposta do projeto</Link>
        <Link to="/">Protótipo no Figma</Link>
        <Link to="/">Apresentação ao comitê</Link>
        <Link to="/">Documentação</Link>
      </Nav>
    </Container>
  );
};

export default Footer;
