import QuestionSkelton from '@/components/common/skelton/QuestionSkelton';
import QuestionItem from '@/components/home/QuestionItem';
import { useQuestions } from '@/hooks/queries/useQuestion';
import { media } from '@/styles/mediaQuery';
import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { FiRotateCcw } from 'react-icons/fi';

const QuestionsFallback = ({ error, resetErrorBoundary }) => (
  <QuestionContainer>
    <RetryBox>
      <p>인기 Q&A를 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </QuestionContainer>
);

const QuestionsLoading = () => <Skeleton wrapper={QuestionSkelton} count={5} />;

const Questions = () => {
  const [isEmptyQuestions, setIsEmptyQuestions] = useState(false);
  const [leftSectionQuestions, setLeftSectionQuestions] = useState([]);
  const [rightSectionQuestions, setRightSectionQuestions] = useState([]);
  const { data } = useQuestions({ page: 1, count: 6, type: 'total' });

  useEffect(() => {
    setIsEmptyQuestions(data?.questions?.length === 0);
    setLeftSectionQuestions(data?.questions?.slice(0, 3));
    setRightSectionQuestions(data?.questions?.slice(3, 6));
  }, [data]);

  return (
    <QuestionContainer>
      <QuestionBox>
        {isEmptyQuestions ? <EmptyMessage>인기 Q&A가 없어요 😭😭😭</EmptyMessage> : <Label>인기 Q&A</Label>}
        <QuestionListWrapper>
          <LeftSection>
            {leftSectionQuestions.map((question) => (
              <QuestionItem key={question.questionId} {...question} />
            ))}
          </LeftSection>
          <RightSection>
            {rightSectionQuestions.map((question) => (
              <QuestionItem key={question.questionId} {...question} />
            ))}
          </RightSection>
        </QuestionListWrapper>
      </QuestionBox>
    </QuestionContainer>
  );
};

const QuestionSection = () => {
  return (
    <ErrorBoundary FallbackComponent={QuestionsFallback}>
      <Suspense fallback={<QuestionsLoading />}>
        <Questions />
      </Suspense>
    </ErrorBoundary>
  );
};

const QuestionContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 6em;
`;

const QuestionBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  padding: 2em;
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
`;

const RightSection = styled.ul`
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
`;

const EmptyMessage = styled.p`
  font-size: 0.9rem;
  font-weight: 800;
  text-align: center;
`;

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRotateCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default QuestionSection;
