import styled from "styled-components";
import { StyleProps } from "./types";

export const Container = styled.button<StyleProps>`
  height: ${(props) => (props.size === "default" ? "72px" : "60px")};
  width: ${(props) => (props.size === "default" ? "360px" : "300px")};
  border-radius: 45px;
  font-size: ${(props) => (props.size === "default" ? "24px" : "20px")};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) =>
    props.outlined ? `3px solid ${props.borderColor}` : "none"};
  text-transform: uppercase;
  cursor: pointer;
`;
