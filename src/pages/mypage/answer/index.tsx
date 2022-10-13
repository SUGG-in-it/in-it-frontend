import { getUserAnswerPage } from '@/api/answers';
import Pagination from '@/components/common/Pagination';
import MypageLayout from '@/components/layouts/MypageLayout';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useEffect, useState } from 'react';

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
      <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
    </MypageLayout>
  );
};

export default MyAnswer;
