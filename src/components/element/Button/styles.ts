import styled from "styled-components";
import { Breakpoints, Colors } from 'shared/enums';
import { ContainerProps } from './types';

export const Container = styled.button<ContainerProps>`
  width: 300px; //360;
  height: 60px; // 72
  border-radius: 45px;
  font-size: 20px; //24
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) =>
    props.outlined ? `3px solid ${props.borderColor}` : "none"};
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: 360px;
    height: 72px;
    font-size: 24px;
  }
`;
