import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Breakpoints } from "shared/enums";
import { ReactComponent as Brand } from "assets/Logo-white.svg";
import { StyleProps } from "./types";

export const Container = styled.header<StyleProps>`
  background-color: ${props => props.background};
  color: ${props => props.textColor}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 20px;
  max-width: 1000px;
  margin: auto;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    padding: 22px 0;
  }
`;

export const BrandLink = styled(RouterLink)`
  width: 35vw;
  max-width: 150px;
`;

export const Logo = styled(Brand)`
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
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

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  margin-right: 15px;
`;

export const Navigation = styled.nav`
  flex: 1;
  color: inherit;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    flex-direction: row;
  }
`;

export const SubNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
