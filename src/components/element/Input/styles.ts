import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "shared/enums/";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
`;

export const Container = styled.div`
  display: flex;
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
  width: 530px;
  height: 72px;
  border: 0;
  border-radius: 10px;
  padding: 24px 24px 24px 72px;
  background-color: ${Colors.INPUT_BACKGROUND};
  font-family: Ubuntu sans-serif;
  font-size: 24px;
  font-weight: 300;
`;
