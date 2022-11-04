import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const CommentListSkeleton = () => {
  return (
    <CommentListSectionWrapper>
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
    </CommentListSectionWrapper>
  );
};

const CommentListSectionWrapper = styled.div`
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  span {
    margin-top: 30px;
  }
`;

export default CommentListSkeleton;
