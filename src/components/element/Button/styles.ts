import styled, { keyframes } from "styled-components";
import { Breakpoints } from "shared/enums";
import { ContainerProps } from "./types";
import { CgSpinner } from "react-icons/cg";

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(CgSpinner)`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
`;
