import { FiRotateCcw } from 'react-icons/fi';
import styled from 'styled-components';

export const RetryButton = styled(FiRotateCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;
