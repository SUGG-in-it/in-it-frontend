import { useSearchQuestionQuery } from '@/hooks/queries/useQuestion';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import StatusBar from '@/components/question/list/StatusBar';
import QuestionItem from '@/components/question/list/QuestionItem';
import GrayLine from '@/components/common/GreyLine';
import { useRouter } from 'next/router';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import QuestionSearchSection from '@/components/question/list/QuestionSearchSection';
import QuestionListSkeleton from '@/components/question/list/QuestionListSection/index.skeleton';
import RetryErrorBoundary from '@/components/common/ErrorBoundary/RetryErrorBoundary';
import { media } from '@/styles/mediaQuery';

const Questions = ({ currentPage }: { currentPage: number }) => {
  const [status, setStatus] = useState('total');
  const router = useRouter();
  const queryStatus = router.query.status;
  const query = router.query.query as string;
  const tag = router.query.tag as string;

  const { data: questions } = useSearchQuestionQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.QUESTION_LIST,
    type: status,
    tag,
    query,
  });

  useEffect(() => {
    if (queryStatus) {
      setStatus(queryStatus as string);
    }
  }, [queryStatus]);

  return (
    <QuestionListWrapper>
      {questions.searchQuestionList.map((question, index) => (
        <>
          <QuestionItem key={question.questionId} {...question} />
          <GrayLine />
        </>
      ))}
    </QuestionListWrapper>
  );
};

const QuestionsSection = ({ currentPage }: { currentPage: number }) => {
  return (
    <QuestionListContainer>
      <StatusBar />
      <QuestionSearchSection />
      <RetryErrorBoundary>
        <Suspense fallback={<QuestionListSkeleton />}>
          <Questions currentPage={currentPage} />
        </Suspense>
      </RetryErrorBoundary>
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled.div`
  max-width: 700px;
  width: 70vw;
  margin: 0 auto;
  ${media.mobile} {
    width: 90vw;
  }
`;

const QuestionListWrapper = styled.ul`
  padding-top: 50px;
`;

export default QuestionsSection;
