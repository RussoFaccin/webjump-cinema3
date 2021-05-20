import styled from 'styled-components';
import { BiError } from 'react-icons/bi'
import { Colors } from 'shared/enums';

export const ErrorContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;

export const ErrorMessage = styled.p<{isVisible: boolean}>`
  position: absolute;
  top: 0;
  text-align: center;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transform: translateY(-100%);
  margin: 0;
  background-color: ${Colors.PRIMARY};
  color: ${Colors.WHITE};
  padding: 4px;
  line-height: 1;
`;

export const ErrorIcon = styled(BiError)`
  width: 24px;
  height: 24px;
`;