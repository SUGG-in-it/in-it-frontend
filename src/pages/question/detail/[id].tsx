import GrayLine from '@/components/common/GreyLine';
import MoonLoading from '@/components/common/loading/MoonLoading';
import QuestionSkelton from '@/components/common/skelton/QuestionSkelton';
import QuestionLayout from '@/components/layouts/QuestionLayout';
import AnswerSection from '@/components/question/detail/answer/AnswerSection';
import QuestionSection from '@/components/question/detail/qusetion/QuestionSection';
import { useQuestionQuery, useQuestionsQuery } from '@/hooks/queries/useQuestion';
import { media } from '@/styles/mediaQuery';
import { Question } from '@/types/response/questions';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiRefreshCcw } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const QuestionsFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>질문을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const QuestionsLoading = () => <Skeleton wrapper={QuestionSkelton} count={5} />;

const QuestionDetail = ({ id }: { id: number }) => {
  const { data: question } = useQuestionQuery(id);

  return (
    <QuestionLayout>
      <QuestionWrapper>
        <QuestionSection question={question} />
        <GrayLine />
        <AnswerSection question={question} />
      </QuestionWrapper>
    </QuestionLayout>
  );
};

const QuestionDetailPage = ({ id }: { id: number }) => {
  return (
    <ErrorBoundary FallbackComponent={QuestionsFallback}>
      <Suspense fallback={<QuestionsLoading />}>
        <QuestionDetail id={id} />
      </Suspense>
    </ErrorBoundary>
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

const RetryButton = styled(FiRefreshCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default QuestionDetailPage;
