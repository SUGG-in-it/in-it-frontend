import { RetryBox } from '@/components/common/fallback/RetryBox.style';
import { RetryButton } from '@/components/common/fallback/RetryButton.style';

const QuestionDetailFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>질문을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

export default QuestionDetailFallback;
