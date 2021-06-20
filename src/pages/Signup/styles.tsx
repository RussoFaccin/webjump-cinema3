import styled from "styled-components";
import { Breakpoints, Colors } from "shared/enums";
import { ReactComponent as Brand } from "assets/Logo-white.svg";
import { Link } from "react-router-dom";
import { Button as FormButton } from "components/element";
import { Input as FormInput } from "components/element";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    flex-direction: row;
  }
`;

const Section = styled.section`
  padding: 100px 0;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    padding: 0;
  }
`;

export const SectionMain = styled(Section)`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.WHITE};
  flex: 2.49;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    order: 2;
  }
`;

export const SectionAction = styled(Section)`
  order: 2;
  background-color: ${Colors.PRIMARY};
  flex: 1;
  min-width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    order: 1;
  }
`;

export const HeadingAction = styled.h2`
  text-align: center;
  font-size: 4.5rem;
  font-weight: 400;
  color: ${Colors.WHITE};
  margin-bottom: 64px;
`;

export const TextAction = styled.p`
  text-align: center;
  font-size: 2.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  width: 280px;
  color: ${Colors.WHITE};
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
  font-size: 4.5rem;
  font-weight: 400;
  color: ${Colors.PRIMARY};
  margin-bottom: 64px;
`;

export const Input = styled(FormInput)`
  width: 300px;
  
  &:not(:last-of-type) {
    margin-bottom: 35px;
  }

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: auto;
  }
`;

export const Button = styled(FormButton)`
  position: relative;
  margin-top: 32px;

  &:focus {
    outline: 0;
  }
`;

export const Message = styled.strong`
    font-size: 16px;
    font-weight: 300;
    padding: 10px 0;
    color: ${Colors.PRIMARY};
`;