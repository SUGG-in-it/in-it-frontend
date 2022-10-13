import { getUserAnswerPage } from '@/api/answers';
import Pagination from '@/components/common/Pagination';
import MypageLayout from '@/components/layouts/MypageLayout';
import AnswerListSection from '@/components/mypage/answer/AnswerListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyAnswer = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchUserQuestionPage() {
      const { count } = await getUserAnswerPage(PAGINATION_SIZE.USER_ANSWER_LIST);
      setTotalPage(count);
    }
    fetchUserQuestionPage();
  }, []);

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <MypageLayout>
      <>
        <UserAnswerSection>
          <AnswerListSection currentPage={currentPage} />
        </UserAnswerSection>
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </>
    </MypageLayout>
  );
};

const UserAnswerSection = styled.ul`
  padding-top: 10px;
`;

export default MyAnswer;
