import styled from "styled-components";
import { Colors } from "shared/enums";
import { ReactComponent as Brand } from "assets/Logo-white.svg";
import { Link } from "react-router-dom";
import { Button as FormButton } from "components/element";
import { Input as FormInput } from "components/element";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const SectionMain = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.WHITE};
  flex-basis: 1370px;
`;

export const SectionAction = styled.section`
  background-color: ${Colors.PRIMARY};
  flex-basis: 550px;
  min-width: 320px;
`;

export const BrandLink = styled(Link)`
  position: absolute;
  top: 20px;
  width: 130px;
  z-index: 2;
`;

export const Logo = styled(Brand)`
  width: 100%;
  * {
    fill: ${Colors.PRIMARY};
  }
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

export const Form = styled.form`
  max-width: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  color: ${Colors.PRIMARY};
  margin-bottom: 64px;
`;

export const InputEmail = styled(FormInput)`
  margin-bottom: 16px;
`;

export const Button = styled(FormButton)`
  position: relative;
  margin-top: 32px;
`;