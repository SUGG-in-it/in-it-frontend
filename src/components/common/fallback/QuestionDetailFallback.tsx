import { media } from '@/styles/mediaQuery';
import { FiRefreshCcw } from 'react-icons/fi';
import styled from 'styled-components';

const QuestionDetailFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>질문을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 10vh auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRefreshCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default QuestionDetailFallback;
