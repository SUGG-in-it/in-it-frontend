import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const AnswerListSkeleton = () => {
  return (
    <AnswerListContainer>
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
    </AnswerListContainer>
  );
};

const AnswerListContainer = styled.div`
  span {
    width: calc(100% - 120px);
    margin: 20px 30px;
  }
`;

export default AnswerListSkeleton;
