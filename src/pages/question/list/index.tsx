import Pagination from '@/components/common/Pagination';
import MainLayout from '@/components/layouts/MainLayout';
import QuestionsSection from '@/components/question/list/QuestionListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useQuestionPageQuery } from '@/hooks/queries/useQuestion';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const QuestionListPage = () => {
  const router = useRouter();
  const queryStatus = router.query.status as 'doing' | 'completed' | 'total';
  const currentPage = Number(router.query.page) || 1;

  const { data: page } = useQuestionPageQuery({ size: PAGINATION_SIZE.QUESTION_LIST, type: queryStatus });

  const handlePageClick = (number: number) => {
    router.push({ pathname: '/question/list', query: { status: queryStatus, page: number + 1 } });
  };

  return (
    <MainLayout>
      <QuestionListContainer>
        <ContentSection>
          <QuestionsSection currentPage={currentPage} />
        </ContentSection>
        <Pagination totalPage={page?.count} currentPage={currentPage} onPageClick={handlePageClick} />
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
