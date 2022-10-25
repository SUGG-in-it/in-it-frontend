import QuestionDetailFallback from '@/components/common/fallback/QuestionDetailFallback';
import GrayLine from '@/components/common/GreyLine';
import QuestionDetailSkeleton from '@/components/common/skelton/QuestionDetailSkeleton';
import QuestionLayout from '@/components/layouts/QuestionLayout';
import AnswerSection from '@/components/question/detail/answer/AnswerSection';
import QuestionSection from '@/components/question/detail/qusetion/QuestionSection';
import { useQuestionQuery } from '@/hooks/queries/useQuestion';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

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
      <ErrorBoundary FallbackComponent={QuestionDetailFallback}>
        <Suspense fallback={<QuestionDetailSkeleton />}>
          <QuestionDetail id={id} />
        </Suspense>
      </ErrorBoundary>
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

const QuestionWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default QuestionDetailPage;
