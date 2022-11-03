import { getQuestionPage } from '@/api/questions';
import Pagination from '@/components/common/Pagination';
import MainLayout from '@/components/layouts/MainLayout';
import QuestionListSection from '@/components/question/list/qustionListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuestionListPage = () => {
  const [totalPage, setTotalPage] = useState(0);
  const router = useRouter();
  const queryStatus = router.query.status as 'doing' | 'completed' | 'total';
  const currentPage = Number(router.query.page) || 1;

  useEffect(() => {
    async function fetchQuestionPage() {
      const { count } = await getQuestionPage({ size: PAGINATION_SIZE.QUESTION_LIST, type: queryStatus });
      setTotalPage(count);
    }
    fetchQuestionPage();
  }, [queryStatus]);

  const handlePageClick = (number: number) => {
    router.push({ pathname: '/question/list', query: { status: queryStatus, page: number + 1 } });
  };

  return (
    <MainLayout>
      <QuestionListContainer>
        <ContentSection>
          <QuestionListSection currentPage={currentPage} />
        </ContentSection>
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </QuestionListContainer>
    </MainLayout>
  );
};

const QuestionListContainer = styled.div`
  padding-bottom: 5em;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 20px;
  ${media.tablet} {
    padding-top: 30px;
  }
`;

export default QuestionListPage;
