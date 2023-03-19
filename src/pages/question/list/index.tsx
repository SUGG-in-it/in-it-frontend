import Pagination from '@/components/common/Pagination';
import MainLayout from '@/layouts/MainLayout';
import QuestionList from '@/components/question/list/QuestionList';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSearchQuestionPageQuery } from '@/hooks/queries/useQuestion';
import withHead from '@/components/hoc/withHead';

const QuestionListPage = () => {
  const router = useRouter();
  const type = router.query.type as 'doing' | 'completed' | 'total';
  const tag = router.query.tag as string;
  const query = router.query.query as string;
  const currentPage = Number(router.query.page) || 1;

  const { data: page } = useSearchQuestionPageQuery({ size: PAGINATION_SIZE.QUESTION_LIST, type, query, tag });

  const handlePageClick = (number: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: number + 1 },
    });
  };

  return (
    <MainLayout>
      <QuestionListContainer>
        <QuestionListWrapper>
          <QuestionList currentPage={currentPage} />
        </QuestionListWrapper>
        <Pagination totalPage={page?.count} currentPage={currentPage} onPageClick={handlePageClick} />
      </QuestionListContainer>
    </MainLayout>
  );
};

const QuestionListContainer = styled.section`
  padding: 2em 1em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 4px;
  background: white;
  margin-bottom: 2em;
`;

const QuestionListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  ${media.tablet} {
    padding-top: 30px;
  }
`;

export default withHead(QuestionListPage, 'init : 질문 리스트', '');
