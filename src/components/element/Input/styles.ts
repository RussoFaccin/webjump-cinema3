import styled from "styled-components";
import { Breakpoints, Colors } from "shared/enums/";

export const invalidStyle = { outline: `2px solid ${Colors.PRIMARY}` };

export const Container = styled.div`
  width: 300px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: 530px;
    height: 72px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const IconBox = styled.div`
  position: absolute;
  margin: 24px;

  svg {
    width: 24px;
    height: 24px;
    color: ${Colors.LIGHT};
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

type TextBoxProps = {
  error: boolean;
};

export const TextBox = styled.input<TextBoxProps>`
  width: 100%;
  height: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  padding: 24px 24px 24px 72px;
  background-color: ${Colors.INPUT_BACKGROUND};
  color: ${Colors.LIGHT};
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-weight: 300;
  outline: ${(props) => (props.error ? invalidStyle.outline : "none")};
`;

export const ErrorMessage = styled.p`
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
  margin: 0;
  padding: 4px;
  background-color: ${Colors.PRIMARY};
  color: ${Colors.WHITE};
  transform: translateY(100%);

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    display: none;
  }
`;
