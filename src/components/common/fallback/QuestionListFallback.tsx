import { RetryButton } from '@/components/common/fallback/RetryButton.style';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const QuestionListFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>Q&A를 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const RetryBox = styled.div`
  max-width: 700px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
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

export default QuestionListFallback;
