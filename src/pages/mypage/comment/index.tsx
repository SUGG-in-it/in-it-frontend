import { getUserCommentPage } from '@/api/comments';
import Pagination from '@/components/common/Pagination';
import MypageLayout from '@/components/layouts/MypageLayout';
import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyComment = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchUserCommentPage() {
      const { count } = await getUserCommentPage(PAGINATION_SIZE.USER_COMMENT_LIST);
      setTotalPage(count);
    }
    fetchUserCommentPage();
  }, []);

  const handlePageClick = (number: number) => {
    setCurrentPage(number + 1);
  };

  return (
    <MypageLayout>
      <>
        <UserCommentSection></UserCommentSection>
        <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
      </>
    </MypageLayout>
  );
};

const UserCommentSection = styled.ul`
  padding-top: 10px;
`;

export default MyComment;
