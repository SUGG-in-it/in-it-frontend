import { useSearchQuestionQuery } from '@/hooks/queries/useQuestion';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import StatusBar from '@/components/question/list/StatusBar';
import QuestionItem from '@/components/question/list/QuestionListItem';
import { useRouter } from 'next/router';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import QuestionSearchBar from '@/components/question/list/QuestionSearchBar';
import QuestionListSkeleton from '@/components/question/list/QuestionList/index.skeleton';
import RetryErrorBoundary from '@/components/common/ErrorBoundary/RetryErrorBoundary';
import { media } from '@/styles/mediaQuery';
import QuestionOption from '@/components/question/list/QuestionOption';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionListTypeState } from '@/store/atoms/questionListType';
import QuestionGridItem from '@/components/question/list/QuestionGridItem';
import QuestionListItem from '@/components/question/list/QuestionListItem';

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

  const questionListType = useRecoilValue(questionListTypeState);

  useEffect(() => {
    if (queryStatus) {
      setStatus(queryStatus as string);
    }
  }, [queryStatus]);
  console.log('questions', questionListType);

  return (
    <QuestionListWrapper className={questionListType}>
      {questions.searchQuestionList.map((question, index) =>
        questionListType === 'grid' ? (
          <QuestionGridItem key={question.questionId} {...question} />
        ) : (
          <QuestionListItem key={question.questionId} {...question} />
        )
      )}
    </QuestionListWrapper>
  );
};

const QuestionList = ({ currentPage }: { currentPage: number }) => {
  return (
    <QuestionListContainer>
      <StatusBar />
      <QuestionListHeader>
        <QuestionSearchBar />
        <QuestionOption />
      </QuestionListHeader>
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

const QuestionListHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionListWrapper = styled.ul`
  padding-top: 50px;
  &.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 26px 15px;
    padding: 20px;
  }

  &.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 16px;
    padding: 20px 20px 20px 14px;
  }
`;

export default QuestionList;
