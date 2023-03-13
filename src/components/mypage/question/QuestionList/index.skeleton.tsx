import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const QuestionListSkeleton = () => {
  return (
    <QuestionListContainer>
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled.div`
  span {
    width: calc(100% - 120px);
    margin: 20px 30px;
  }
`;

export default QuestionListSkeleton;
