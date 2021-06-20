import styled from "styled-components";
import { BsHeartFill } from "react-icons/bs";
import { Breakpoints } from "shared/enums";

const SrOnly = `
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
`;

export const Container = styled.article`
  position: relative;
  flex: none;
  width: 105px;
  height: 157px;
  border-radius: 10px;
  overflow: hidden;
  background-color: gray;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: 165px;
    height: 253px;
  }
  :not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Heading = styled.h3`
  ${SrOnly}
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.15s ease-in;

  :hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  width: 35px;
  height: 35px;
  top: 0;
  right: 0;
  background-color: transparent;
  border: 0;

  :focus {
    outline: 0;
  }
`;

export const HeartIcon = styled(BsHeartFill)`
  width: 15px;
  height: 15px;

  @media screen and (min-width: ${Breakpoints.TABLET}) {
    width: 18px;
    height: 18px;
    top: 6px;
    right: 6px;
  }
`;
