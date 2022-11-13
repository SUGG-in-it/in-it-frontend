import Pagination from '@/components/common/Pagination';
import AnswerHeader from '@/components/question/detail/answer/AnswerHeader';
import AnswerItem from '@/components/question/detail/answer/AnswerItem';
import { useAnswerPageQuery, useAnswersQuery } from '@/hooks/queries/useAnswer';
import { media } from '@/styles/mediaQuery';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Question } from '@/types/response/questions';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useRecoilValue } from 'recoil';
import { loginState, userState } from '@/store/users';
import { Answer } from '@/types/response/answers';
import AnswerListSkeleton from '@/components/question/detail/answer/AnswerSection/index.skeleton';
import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/router';

const EditorSection = dynamic(() => import('@/components/question/detail/answer/EditorSection'), { ssr: false });

const AnswerSection = ({ question }: { question: Question }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: page } = useAnswerPageQuery({ size: PAGINATION_SIZE.ANSWER_LIST, questionId: question.questionId });

  const { data: answers } = useAnswersQuery({
    page: currentPage - 1,
    size: PAGINATION_SIZE.ANSWER_LIST,
    questionId: question.questionId,
  });

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <AnswerListSectionWrapper>
      {answers && answers.map((answer: Answer) => <AnswerItem key={answer.answerId} question={question} {...answer} />)}
      <Pagination totalPage={page?.count} currentPage={currentPage} onPageClick={handlePageClick} />
    </AnswerListSectionWrapper>
  );
};

const AnswerListSection = ({ question }: { question: Question }) => {
  const user = useRecoilValue(userState);
  const isLogin = useRecoilValue(loginState);
  const router = useRouter();

  const handleLoginButton = () => {
    router.push('/signin');
  };

  return (
    <>
      <AnswerHeader answerCount={question.answerCount} />
      <RetryErrorBoundary>
        <Suspense fallback={<AnswerListSkeleton />}>
          <AnswerSection question={question} />
        </Suspense>
      </RetryErrorBoundary>
      {question.type === 'completed' ? null : (
        <AnswerWriteSectionWrapper>
          {isLogin ? (
            <ToastEditorWrapper>
              <Notice>{`${user.nickname}님, 답변해주세요! 😉`}</Notice>
              <EditorSectionWrapper>
                <EditorSection questionId={question.questionId} content={''} />
              </EditorSectionWrapper>
            </ToastEditorWrapper>
          ) : (
            <ButtonContainer>
              <Notice>{`로그인하여 답변해주세요!`}</Notice>
              <LoginButton onClick={handleLoginButton}>{`😎 로그인 하러 가기`}</LoginButton>
            </ButtonContainer>
          )}
        </AnswerWriteSectionWrapper>
      )}
    </>
  );
};

const AnswerListSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 0 auto;
  ${media.mobile} {
    width: 90vw;
  }
`;

const AnswerWriteSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 3em auto;
  ${media.mobile} {
    width: 90vw;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3em 2em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  ${media.mobile} {
    padding: 0;
    border: none;
    background-color: ${({ theme }) => theme.backgrondDarkColor};
  }
`;

const LoginButton = styled(Button)`
  width: 200px;
`;

const Notice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1em;
  margin-left: 1em;
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

export default AnswerListSection;
