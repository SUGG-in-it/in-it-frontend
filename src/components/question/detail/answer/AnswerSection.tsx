import { getAnswerPage } from '@/api/answers';
import Pagination from '@/components/common/Pagination';
import AnswerHeader from '@/components/question/detail/answer/AnswerHeader';
import AnswerItem from '@/components/question/detail/answer/AnswerItem';
import { useAnswersQuery } from '@/hooks/queries/useAnswer';
import { media } from '@/styles/mediaQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Question } from '@/types/response/questions';

const EditorSection = dynamic(() => import('@/components/question/detail/answer/EditorSection'), { ssr: false });

const AnswerListSection = ({ question }: { question: Question }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const { data: answers, refetch } = useAnswersQuery({ page: currentPage, size: 5, questionId: question.questionId });

  useEffect(() => {
    async function fetchQuestionPage() {
      const { count } = await getAnswerPage({ size: 5, questionId: question.questionId });
      setTotalPage(count);
    }
    fetchQuestionPage();
  }, [currentPage, answers]);

  const handlePageClick = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <AnswerHeader />
      <AnswerListSectionWrapper>
        {answers?.answers.map((answer) => (
          <AnswerItem key={answer.id} question={question} {...answer} />
        ))}
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </AnswerListSectionWrapper>
      <AnswerWriteSectionWrapper>
        <ToastEditorWrapper>
          <Notice>{'지롱님, 답변해주세요! 😉'}</Notice>
          <EditorSectionWrapper>
            <EditorSection refetch={refetch} id={question.questionId} />
          </EditorSectionWrapper>
        </ToastEditorWrapper>
      </AnswerWriteSectionWrapper>
    </>
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
  ${media.tablet} {
    margin-left: 7vw;
  }
`;

export default AnswerListSection;
