import Pagination from '@/components/common/Pagination';
import MainLayout from '@/components/layouts/MainLayout';
import QuestionsSection from '@/components/question/list/QuestionListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSearchQuestionPageQuery } from '@/hooks/queries/useQuestion';
import withHead from '@/components/hoc/withHead';

const QuestionListPage = () => {
  const router = useRouter();
  let type = router.query.status as 'doing' | 'completed' | 'total';
  const tag = router.query.tag as string;
  const query = router.query.query as string;
  const currentPage = Number(router.query.page) || 1;

  const { data: page } = useSearchQuestionPageQuery({ size: PAGINATION_SIZE.QUESTION_LIST, type, query, tag });

  const handlePageClick = (number: number) => {
    if (!type) type = 'total';
    if (tag && query) {
      return router.push({ pathname: '/question/list', query: { status: type, tag, query, page: number + 1 } });
    }
    if (tag) {
      return router.push({ pathname: '/question/list', query: { status: type, tag, page: number + 1 } });
    }
    if (query) {
      return router.push({ pathname: '/question/list', query: { status: type, query, page: number + 1 } });
    }
    return router.push({ pathname: '/question/list', query: { status: type, page: number + 1 } });
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

export default withHead(QuestionListPage,'init : 질문 목록','');
