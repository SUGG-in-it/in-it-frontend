import GrayLine from '@/components/common/GreyLine';
import QuestionLayout from '@/components/layouts/QuestionLayout';
import AnswerSection from '@/components/question/detail/answer/AnswerSection';
import QuestionSection from '@/components/question/detail/qusetion/QuestionSection';
import styled from 'styled-components';

const QuestionDetailPage = () => {
  return (
    <QuestionLayout>
      <QuestionWrapper>
        <QuestionSection />
        <GrayLine />
        <AnswerSection />
      </QuestionWrapper>
    </QuestionLayout>
  );
};
const QuestionWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default QuestionDetailPage;
