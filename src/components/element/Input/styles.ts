import styled from "styled-components";
import { StyleProps } from "./types";
import { Colors } from "shared/enums/";

export const Container = styled.div<StyleProps>`
  width: ${(props) => (props.size === "default" ? "530px" : "300px")};
  height: ${(props) => (props.size === "default" ? "72px" : "60px")};
  position: relative;
  display: flex;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  svg {
    position: absolute;
    left: 26px;
    width: 24px;
    height: 24px;
    opacity: .15;
  }
`;

export const Label = styled.label`
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

export const TextBox = styled.input`
  width: 100%;
  height: 100%;
  height: 72px;
  border: 0;
  border-radius: 10px;
  padding: 24px 24px 24px 72px;
  background-color: ${Colors.INPUT_BACKGROUND};
  color: ${Colors.LIGHT};
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 300;
`;
