import React from "react";
import {
  FooterElement,
  FooterBrand,
  FooterLogo,
  FooterHeading,
  FooterNav,
  FooterLink,
  StandardLink,
} from "./styles";

const Footer = () => {
  return (
    <FooterElement>
      <FooterBrand to="/">
        <FooterLogo />
        <FooterHeading>Cinejump!</FooterHeading>
      </FooterBrand>
      <FooterNav>
        <StandardLink href="http://www.rodrigorusso.com.br" target="blank">
          Desnvolvido por Rodrigo Russo
        </StandardLink>
        <FooterLink to="/">Proposta do projeto</FooterLink>
        <FooterLink to="/">Protótipo no Figma</FooterLink>
        <FooterLink to="/">Apresentação ao comitê</FooterLink>
        <FooterLink to="/">Documentação</FooterLink>
      </FooterNav>
    </FooterElement>
  );
};

export default Footer;
