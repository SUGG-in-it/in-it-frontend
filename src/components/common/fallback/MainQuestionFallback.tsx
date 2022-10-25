import { RetryBox } from '@/components/common/fallback/RetryBox.style';
import { RetryButton } from '@/components/common/fallback/RetryButton.style';
import styled from 'styled-components';

const MainQuestionFallback = ({ error, resetErrorBoundary }) => (
  <QuestionContainer>
    <RetryBox>
      <p>최신 Q&A를 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </QuestionContainer>
);

const QuestionContainer = styled.div`
  background-color: white;
  padding-bottom: 6em;
`;

export default MainQuestionFallback;
