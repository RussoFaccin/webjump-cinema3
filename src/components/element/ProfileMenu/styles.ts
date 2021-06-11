import styled from "styled-components";
import { Colors } from "shared/enums";
import { Link as Anchor } from "react-router-dom";

export const Container = styled.section`
  width: 208px;
  background-color: ${Colors.LIGHT};
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  padding: 16px 0;
`;

export const Name = styled.h3`
  padding: 20px 0;
  font-size: 2rem;
  font-weight: 300;
  color: ${Colors.SECONDARY};
  margin: 0;
  padding: 0 16px;
  margin-bottom: 18px;
`;

const menuEntries = `
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${Colors.LIGHT_TEXT};
  text-decoration: none;
  height: 56px;
  padding: 0 16px;

  svg {
    margin-right: 16px; 
  }
`;

export const Link = styled(Anchor)`
  ${menuEntries}
`;


