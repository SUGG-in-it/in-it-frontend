import { getAnswerPage } from '@/api/answers';
import Pagination from '@/components/common/Pagination';
import AnswerHeader from '@/components/question/detail/answer/AnswerHeader';
import AnswerItem from '@/components/question/detail/answer/AnswerItem';
import { useAnswersQuery } from '@/hooks/queries/useAnswer';
import { media } from '@/styles/mediaQuery';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Question } from '@/types/response/questions';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import MoonLoading from '@/components/common/loading/MoonLoading';
import { FiRotateCcw } from 'react-icons/fi';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/users';
import { Answer } from '@/types/response/answers';

const EditorSection = dynamic(() => import('@/components/question/detail/answer/EditorSection'), { ssr: false });

const AnswerListFallBack = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>답변을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const AnswerListLoading = () => <Skeleton wrapper={MoonLoading} count={5} />;

const AnswerSection = ({ question }: { question: Question }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const user = useRecoilValue(userState);

  const { data: answers, refetch } = useAnswersQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.ANSWER_LIST,
    questionId: question.questionId,
  });

  useEffect(() => {
    async function fetchQuestionPage() {
      const { count } = await getAnswerPage({ size: PAGINATION_SIZE.ANSWER_LIST, questionId: question.questionId });
      setTotalPage(count);
    }
    fetchQuestionPage();
  }, [currentPage, answers]);

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <>
      <AnswerHeader />
      <AnswerListSectionWrapper>
        {answers.map((answer: Answer) => (
          <AnswerItem key={answer.id} question={question} refetch={refetch} {...answer} />
        ))}
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </AnswerListSectionWrapper>
      <AnswerWriteSectionWrapper>
        <ToastEditorWrapper>
          <Notice>{`${user.nickname}님, 답변해주세요! 😉`}</Notice>
          <EditorSectionWrapper>
            <EditorSection questionId={question.questionId} content={''} />
          </EditorSectionWrapper>
        </ToastEditorWrapper>
      </AnswerWriteSectionWrapper>
    </>
  );
};

const AnswerListSection = ({ question }: { question: Question }) => {
  return (
    <ErrorBoundary FallbackComponent={AnswerListFallBack}>
      <Suspense fallback={<AnswerListLoading />}>
        <AnswerSection question={question} />
      </Suspense>
    </ErrorBoundary>
  );
};

const AnswerListSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 0 auto;
`;

const AnswerWriteSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 3em auto;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 2em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  ${media.mobile} {
    padding: 0;
    border: none;
    background-color: ${({ theme }) => theme.backgrondDarkColor};
  }
`;

const Notice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1em;
`;

const EditorSectionWrapper = styled.div`
  width: 85vw;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 3em;
  padding-bottom: 5em;
  flex-direction: column;
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

export default AnswerListSection;
