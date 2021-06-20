import styled from "styled-components";
import { Breakpoints, Colors } from 'shared/enums';

export const Content = styled.main`
  max-width: 1000px;
  padding: 0 20px;
  margin: auto;

  @media screen and (min-width: ${Breakpoints.FULL}) {
    padding: 0;
  }
`;

export const Environment = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${Colors.SECONDARY};
  color: ${Colors.LIGHT};
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
  padding: 4px 0;
`;
