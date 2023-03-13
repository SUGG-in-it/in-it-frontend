import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const AnswerListSkeleton = () => {
  return (
    <AnswerListSectionWrapper>
      <Skeleton height={100} />
      <Skeleton height={100} />
      <Skeleton height={100} />
      <Skeleton height={100} />
    </AnswerListSectionWrapper>
  );
};

const AnswerListSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  span {
    margin-top: 50px;
  }
`;

export default AnswerListSkeleton;
