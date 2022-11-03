import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const QuestionListSkeleton = () => {
  const count = Array.from({ length: 5 }, (v, i) => i);
  return (
    <QuestionListWrapper>
      {count.map((number) => (
        <Question key={number}>
          <Skeleton height={30} style={{ marginBottom: '5px' }} />
          <Skeleton count={3} />
        </Question>
      ))}
    </QuestionListWrapper>
  );
};

const QuestionListWrapper = styled.ul`
  max-width: 700px;
  width: 80vw;
  margin: 0 auto;
  padding-top: 50px;
  span {
    margin-top: 10px;
  }
`;

const Question = styled.li`
  margin-bottom: 5em;
`;

export default QuestionListSkeleton;
