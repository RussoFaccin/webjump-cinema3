import styled from "styled-components";
import { StyleProps } from "./types";

export const Container = styled.button<StyleProps>`
  height: 72px;
  width: 360px;
  border-radius: 45px;
  font-size: 24px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) =>
    props.outlined ? `3px solid ${props.borderColor}` : "none"};
`;
