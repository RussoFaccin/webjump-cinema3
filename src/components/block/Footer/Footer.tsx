import React from "react";
import {
  FooterElement,
  FooterBrand,
  FooterLogo,
  FooterHeading,
  FooterNav,
  TxtSmall,
  FooterLink
} from "./styles";

export const Footer = () => {
  return <FooterElement>
      <FooterBrand to="/">
          <FooterLogo />
          <FooterHeading>Cinejump!</FooterHeading>
      </FooterBrand>
      <FooterNav>
        <TxtSmall>Desenvolvido por Lucas Gabriel</TxtSmall>
        <FooterLink to="/">Proposta do projeto</FooterLink>
        <FooterLink to="/">Protótipo no Figma</FooterLink>
        <FooterLink to="/">Apresentação ao comitê</FooterLink>
        <FooterLink to="/">Documentação</FooterLink>
      </FooterNav>
  </FooterElement>;
};
