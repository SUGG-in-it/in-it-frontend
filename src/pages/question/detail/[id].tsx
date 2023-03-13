import GrayLine from '@/components/common/GreyLine';
import QuestionDetailSkeleton from '@/components/question/detail/qusetion/questionSection/index.skeleton';
import QuestionLayout from '@/layouts/QuestionLayout';
import AnswerSection from '@/components/question/detail/answer/AnswerSection';
import QuestionSection from '@/components/question/detail/qusetion/questionSection';
import { useQuestionQuery } from '@/hooks/queries/useQuestion';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import styled from 'styled-components';
import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import withHead from '@/components/hoc/withHead';

const QuestionDetail = ({ id }: { id: number }) => {
  const { data: question } = useQuestionQuery(id);

  return (
    <QuestionWrapper>
      <QuestionSection question={question} />
      <GrayLine />
      <AnswerSection question={question} />
    </QuestionWrapper>
  );
};

const QuestionDetailPage = ({ id }: { id: number }) => {
  return (
    <QuestionLayout>
      <RetryErrorBoundary>
        <Suspense fallback={<QuestionDetailSkeleton />}>
          <QuestionDetail id={id} />
        </Suspense>
      </RetryErrorBoundary>
    </QuestionLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;

  return {
    props: {
      id,
    },
  };
};

const QuestionWrapper = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default withHead(QuestionDetailPage, 'init : 질문 상세보기', '');
