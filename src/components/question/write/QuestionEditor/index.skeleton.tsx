import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const EditorSkeleton = () => {
  return (
    <QuestionWrapper>
      <Skeleton height={50} />
      <Skeleton height={300} />
      <Skeleton height={50} />
      <Skeleton height={50} />
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  padding-top: 50px;
  span {
    margin-top: 30px;
  }
`;

export default EditorSkeleton;
