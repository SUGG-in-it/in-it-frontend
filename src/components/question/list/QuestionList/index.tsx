import { useSearchQuestionQuery } from '@/hooks/queries/useQuestion';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import StatusBar from '@/components/question/list/StatusBar';
import { useRouter } from 'next/router';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import QuestionSearchBar from '@/components/question/list/QuestionSearchBar';
import QuestionListSkeleton from '@/components/question/list/QuestionList/index.skeleton';
import RetryErrorBoundary from '@/components/common/ErrorBoundary/RetryErrorBoundary';
import { media } from '@/styles/mediaQuery';
import QuestionOption from '@/components/question/list/QuestionOption';
import { useRecoilValue } from 'recoil';
import { questionListTypeState } from '@/store/atoms/questionListType';
import QuestionGridItem from '@/components/question/list/QuestionGridItem';
import QuestionListItem from '@/components/question/list/QuestionListItem';

const Questions = ({ currentPage }: { currentPage: number }) => {
  const router = useRouter();
  const type = router.query.type as string;
  const query = router.query.query as string;
  const tag = router.query.tag as string;

  const { data: questions } = useSearchQuestionQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.QUESTION_LIST,
    type,
    tag,
    query,
  });

  const questionListType = useRecoilValue(questionListTypeState);
  return (
    <QuestionListWrapper className={questionListType}>
      {questions &&
        questions.searchQuestionList.map((question) =>
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
  }

  &.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;

export default QuestionList;
