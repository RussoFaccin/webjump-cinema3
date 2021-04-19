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
          Desenvolvido por Rodrigo Russo
        </StandardLink>
        <StandardLink href="https://webjump.atlassian.net/wiki/spaces/AW/pages/2195030216/Introdu+o+-+1#3.-Cinejump---Projeto-Final" target="blank">Proposta do projeto</StandardLink>
        <StandardLink href='https://www.figma.com/proto/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=7185%3A17&scaling=scale-down-width' target="blank">Protótipo no Figma</StandardLink>
        <Link to="/">Apresentação ao comitê</Link>
        <StandardLink href="https://github.com/RussoFaccin/webjump-cinema2#readme" target="blank">Documentação</StandardLink>
      </Nav>
    </Container>
  );
};

export default Footer;
