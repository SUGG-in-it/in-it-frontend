import QuestionSkelton from '@/components/common/skelton/QuestionSkelton';

import { useQuestionsQuery } from '@/hooks/queries/useQuestion';
import { media } from '@/styles/mediaQuery';
import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { FiRotateCcw } from 'react-icons/fi';
import StatusBar from '@/components/question/list/StatusBar';
import QuestionItem from '@/components/question/list/QuestionItem';
import GrayLine from '@/components/common/GreyLine';
import { useRouter } from 'next/router';
import { PAGINATION_SIZE } from '@/constants/paginationSize';

const QuestionsFallback = ({ error, resetErrorBoundary }) => (
  <QuestionContainer>
    <RetryBox>
      <p>Q&A를 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </QuestionContainer>
);

const QuestionsLoading = () => <Skeleton wrapper={QuestionSkelton} count={5} />;

const Questions = ({ currentPage }: { currentPage: number }) => {
  const [isEmptyQuestions, setIsEmptyQuestions] = useState(false);
  const [status, setStatus] = useState('total');
  const { data: questions } = useQuestionsQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.QUESTION_LIST,
    type: status,
  });
  const router = useRouter();
  const queryStatus = router.query.status;

  useEffect(() => {
    setIsEmptyQuestions(questions?.questions?.length === 0);
  }, [questions]);

  useEffect(() => {
    setStatus(queryStatus as string);
  }, [queryStatus]);

  return (
    <QuestionListContainer>
      <StatusBar />
      {isEmptyQuestions ? <EmptyMessage>Q&A가 없어요 😭😭😭</EmptyMessage> : null}
      <QuestionListWrapper>
        {questions?.questions.map((question, index) => (
          <>
            <QuestionItem key={question.questionId} {...question} />
            <GrayLine />
          </>
        ))}
      </QuestionListWrapper>
    </QuestionListContainer>
  );
};

const QuestionSection = ({ currentPage }: { currentPage: number }) => {
  return (
    <ErrorBoundary FallbackComponent={QuestionsFallback}>
      <Suspense fallback={<QuestionsLoading />}>
        <Questions currentPage={currentPage} />
      </Suspense>
    </ErrorBoundary>
  );
};

const QuestionListContainer = styled.div``;

const QuestionContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 6em;
`;

const QuestionListWrapper = styled.ul`
  max-width: 700px;
  width: 80vw;
  margin: 0 auto;
  padding-top: 50px;
`;

const EmptyMessage = styled.p`
  font-size: 0.9rem;
  font-weight: 800;
  margin-top: 5em;
  margin-bottom: 20em;
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
