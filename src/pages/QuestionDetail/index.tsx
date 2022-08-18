import QuestionSection from '@/pages/QuestionDetail/QuestionSection';
import styled from 'styled-components';

const QuestionDetailPage = () => {
  return (
    <QuestionWrapper>
      <QuestionSection></QuestionSection>
    </QuestionWrapper>
  );
};
const QuestionWrapper = styled.div`
  width: 80vw;
  max-width: 700px;
  margin: 3em auto;
`;

export default QuestionDetailPage;
