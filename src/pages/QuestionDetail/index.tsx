import GrayLine from '@/components/GrayLine';
import AnswerSection from '@/pages/QuestionDetail/AnswerSection';
import QuestionSection from '@/pages/QuestionDetail/QuestionSection';
import styled from 'styled-components';

const QuestionDetailPage = () => {
  return (
    <QuestionWrapper>
      <QuestionSection />
      <GrayLine />
      <AnswerSection />
    </QuestionWrapper>
  );
};
const QuestionWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default QuestionDetailPage;
