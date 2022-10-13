import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useUserQuestionsQuery } from '@/hooks/queries/useQuestion';
import { Question } from '@/types/response/questions';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiCornerDownRight } from 'react-icons/fi';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ContentViewer = dynamic(() => import('@/components/common/ContentViewer'), { ssr: false });

const QuestionListFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <p>나의 질문을 불러오는데 실패했어요 😭😭😭 </p>
  </div>
);

const QuestionListLoading = () => <div />;

const QuestionList = ({ currentPage }: { currentPage: number }) => {
  const router = useRouter();

  const { data: questions } = useUserQuestionsQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.USER_QUESTION_LIST,
  });

  const handleQuestionClick = (questionId: number) => {
    router.push(`/question/detail/${questionId}`);
  };

  return (
    <div>
      {questions?.questions?.map((question: Question) => (
        <QuestionWrapper key={question.questionId} onClick={() => handleQuestionClick(question.questionId)}>
          <TopSection>
            <QLabel>Q</QLabel>
            <Title>{question.title}</Title>
          </TopSection>
          <ContentContainer>
            {question.content && <ContentViewer content={question.content} length={30} />}
          </ContentContainer>
        </QuestionWrapper>
      ))}
    </div>
  );
};

const QuestionListSection = ({ currentPage }: { currentPage: number }) => (
  <ErrorBoundary FallbackComponent={QuestionListFallback}>
    <Suspense fallback={<QuestionListLoading />}>
      <QuestionList currentPage={currentPage} />
    </Suspense>
  </ErrorBoundary>
);

const QuestionWrapper = styled.div`
  position: relative;
  padding: 20px 4px 16px 30px;
  border-bottom: 1px solid #f2f2f2;
  background: 0;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const QLabel = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 0.5em;
  color: ${({ theme }) => theme.pointColor};
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Title = styled.p`
  display: block;
  overflow: hidden;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Content = styled.p`
  display: block;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.texColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 4em);
  height: 33px;
`;

export default QuestionListSection;
