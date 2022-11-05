import Pagination from '@/components/common/Pagination';
import withAuth from '@/components/hoc/withAuth';
import MypageLayout from '@/components/layouts/MypageLayout';
import AnswerListSection from '@/components/mypage/answer/AnswerListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useUserAnswerPageQuery } from '@/hooks/queries/useAnswer';
import { useState } from 'react';
import styled from 'styled-components';

const MyAnswer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: page } = useUserAnswerPageQuery(PAGINATION_SIZE.USER_ANSWER_LIST);

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <MypageLayout>
      <>
        <UserAnswerSection>
          <AnswerListSection currentPage={currentPage} />
        </UserAnswerSection>
        <Pagination totalPage={page?.count} currentPage={currentPage} onPageClick={handlePageClick} />
      </>
    </MypageLayout>
  );
};

const UserAnswerSection = styled.ul`
  padding-top: 10px;
`;

export default withAuth(MyAnswer);
