import GrayLine from '@/components/GrayLine';
import AnswerListSection from '@/pages/QuestionDetail/AnswerListSection';
import AnswerWriteSection from '@/pages/QuestionDetail/AnswerWriteSection';
import QuestionSection from '@/pages/QuestionDetail/QuestionSection';
import styled from 'styled-components';

const QuestionDetailPage = () => {
  return (
    <QuestionWrapper>
      <QuestionSection />
      <GrayLine />
      <AnswerListSection />
      <AnswerWriteSection />
    </QuestionWrapper>
  );
};
const QuestionWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default QuestionDetailPage;
