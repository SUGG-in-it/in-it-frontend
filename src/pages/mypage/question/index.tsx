import { getUserQuestionPage } from '@/api/questions';
import Pagination from '@/components/common/Pagination';
import MypageLayout from '@/components/layouts/MypageLayout';
import QuestionListSection from '@/components/mypage/question/QuestionListSection';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyQuestion = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchUserQuestionPage() {
      const { count } = await getUserQuestionPage(PAGINATION_SIZE.USER_QUESTION_LIST);
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
        <UserQuestionSection>
          <QuestionListSection currentPage={currentPage} />
        </UserQuestionSection>
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </>
    </MypageLayout>
  );
};

const UserQuestionSection = styled.ul`
  padding-top: 10px;
`;

export default MyQuestion;
