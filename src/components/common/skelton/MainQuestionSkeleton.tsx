import { media } from '@/styles/mediaQuery';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const Questions = ({ children }) => {
  return (
    <QuestionContainer>
      <QuestionBox>{children}</QuestionBox>
    </QuestionContainer>
  );
};

const MainQuestionsSkeleton = () => <Skeleton wrapper={Questions} height={400} />;

const QuestionContainer = styled.div`
  background-color: white;
  padding-bottom: 6em;
`;

const QuestionBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

export default MainQuestionsSkeleton;
