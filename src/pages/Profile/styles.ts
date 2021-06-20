import styled from "styled-components";
import { Breakpoints, Colors } from "shared/enums";
import { ReactComponent as User } from "assets/UserCircle.svg";
import {  Button as FormButton, Input } from "components/element";

export const Container = styled.section`
  background-color: ${Colors.SECONDARY};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: auto;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserCircle = styled(User)`
  width: 86px;
  height: auto;
  margin-bottom: 32px;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: 126px;
  }
`;

export const FormInput = styled(Input)`
  width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: auto;
  }
`;

export const Button = styled(FormButton)`
  margin-top: 16px;
`;