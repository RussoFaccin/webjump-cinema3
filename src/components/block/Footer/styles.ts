import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Brand } from "assets/Logo-white.svg";
import { Breakpoints, Colors } from "shared/enums";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--mainColor);
  padding: 30px 0;
  margin-top: 15px;
  font-size: 1.4rem;
`;

export const Logo = styled(Brand)`
  width: 100%;
  height: auto;
`;

export const Heading = styled.h1`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const BrandLink = styled(RouterLink)`
  display: block;
  margin-bottom: 25px;
`;

export const Link = styled(RouterLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 4px 0;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    :not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

export const StandardLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 4px 0;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    :not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.WHITE};

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    flex-direction: row;
  }
`;
