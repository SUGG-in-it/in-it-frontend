import { media } from '@/styles/mediaQuery';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const QuestionListSkeleton = () => {
  return (
    <QuestionListWrapper>
      <LeftSection>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
      </LeftSection>
      <RightSection>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
        <Question>
          <Skeleton height={30} />
          <Skeleton count={2} />
        </Question>
      </RightSection>
    </QuestionListWrapper>
  );
};

const Question = styled.div`
  margin-bottom: 20px;
`;

const QuestionListWrapper = styled.div`
  display: flex;
  ul {
    width: 50%;
  }
  ${media.tablet} {
    flex-direction: column;
    ul {
      width: 100%;
    }
  }
`;

const LeftSection = styled.ul`
  border-right: 1px solid ${({ theme }) => theme.greyLineColor};
  padding-right: 10px;
  li {
    padding: 0.5em 1em 0.5em 0em;
    height: 100px;
  }
  ${media.tablet} {
    border-right: none;
    li {
      padding: 1.5em 1em 1.5em 0em;
      height: 80px;
    }
  }
  span {
    margin-top: 10px;
  }
`;

const RightSection = styled.ul`
  padding-left: 10px;
  li {
    padding: 0.5em 0em 0.5em 1em;
    height: 100px;
  }
  ${media.tablet} {
    li {
      padding: 1.5em 1em 1.5em 0em;
      height: 80px;
    }
  }
  span {
    margin-top: 10px;
  }
`;

export default QuestionListSkeleton;
