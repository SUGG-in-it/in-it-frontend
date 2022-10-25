import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const QuestionDetailSkeleton = () => {
  return (
    <QuestionWrapper>
      <QuestionSectionContainer>
        <QuestionSectionWrapper>
          <Skeleton height={50} style={{ marginBottom: '20px' }} />
          <Skeleton count={3} />
        </QuestionSectionWrapper>
      </QuestionSectionContainer>
      <AnswerListSectionWrapper>
        <Skeleton height={200} />
      </AnswerListSectionWrapper>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  padding-top: 50px;
`;

const QuestionSectionContainer = styled.div`
  padding: 2em 1.2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
`;

const QuestionSectionWrapper = styled.div`
  max-width: 700px;
  width: 80vw;
  margin: 20px auto;
  span {
    margin-top: 10px;
  }
`;

const AnswerListSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 30px auto;
`;

export default QuestionDetailSkeleton;
