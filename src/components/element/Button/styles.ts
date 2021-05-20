import styled from "styled-components";
import { Breakpoints } from 'shared/enums';
import { ContainerProps } from './types';

export const Container = styled.button<ContainerProps>`
  width: 300px;
  height: 60px;
  border-radius: 45px;
  font-size: 20px;
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
