import { getQuestionPage } from '@/api/questions';
import Pagination from '@/components/common/Pagination';
import MainLayout from '@/components/layouts/MainLayout';
import QuestionListSection from '@/components/question/list/QuestionListSection';
import { media } from '@/styles/mediaQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuestionListPage = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchQuestionPage() {
      const { count } = await getQuestionPage({ size: 10, type: 'total' });
      setTotalPage(count);
    }
    fetchQuestionPage();
  }, [currentPage]);

  const handlePageClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <MainLayout>
        <>
          <QuestionListContainer>
            <ContentSection>
              <QuestionListSection currentPage={currentPage} />
            </ContentSection>
            <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
          </QuestionListContainer>
        </>
      </MainLayout>
    </>
  );
};

const QuestionListContainer = styled.div``;

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
