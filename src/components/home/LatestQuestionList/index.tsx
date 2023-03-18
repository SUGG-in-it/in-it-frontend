import QuestionItem from '@/components/home/QuestionItem';
import { useQuestionsQuery } from '@/hooks/queries/useQuestion';
import { media } from '@/styles/mediaQuery';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import RetryErrorBoundary from '@/components/common/ErrorBoundary/RetryErrorBoundary';
import QuestionListSkeleton from '@/components/home/LatestQuestionList/index.skeleton';

const Questions = () => {
  const [leftSectionQuestions, setLeftSectionQuestions] = useState([]);
  const [rightSectionQuestions, setRightSectionQuestions] = useState([]);
  const { data: questions } = useQuestionsQuery({ page: 0, size: PAGINATION_SIZE.MAIN_QUESTION, type: 'total' });

  useEffect(() => {
    setLeftSectionQuestions(questions?.questions?.slice(0, 5));
    setRightSectionQuestions(questions?.questions?.slice(5, 10));
  }, [questions]);

  return (
    <QuestionContainer>
      <QuestionBox>
        <Label>최신 Q&A</Label>
        <QuestionListWrapper>
          <LeftSection>
            {leftSectionQuestions?.map((question, index) => (
              <QuestionItem key={question.questionId} order={index + 1} {...question} />
            ))}
          </LeftSection>
          <RightSection>
            {rightSectionQuestions?.map((question, index) => (
              <QuestionItem key={question.questionId} order={index + 6} {...question} />
            ))}
          </RightSection>
        </QuestionListWrapper>
      </QuestionBox>
    </QuestionContainer>
  );
};

const QuestionSection = () => {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<QuestionListSkeleton />}>
        <Questions />
      </Suspense>
    </RetryErrorBoundary>
  );
};

const QuestionContainer = styled.section`
  padding-bottom: 6em;
`;

const QuestionBox = styled.div`
  max-width: 700px;
  width: 70vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  padding: 1em;
  border-radius: 4px;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 1em;
`;

const QuestionListWrapper = styled.article`
  display: flex;
  ul {
    width: 50%;
  }
  p {
    margin: 0;
  }
  ${media.tablet} {
    flex-direction: column;
    ul {
      width: 100%;
      border-right: none;
    }
  }
`;

const LeftSection = styled.ul`
  border-right: 1px solid ${({ theme }) => theme.greyLineColor};
  li {
    padding: 0.5em 1em 0.5em 0em;
    height: 80px;
    border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
    ${media.tablet} {
      border-right: none;
      height: 80px;
    }
  }
`;

const RightSection = styled.ul`
  li {
    padding: 0.5em 0em 0.5em 1em;
    border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
    height: 80px;
    ${media.tablet} {
      height: 80px;
    }
  }
`;

export default QuestionSection;
