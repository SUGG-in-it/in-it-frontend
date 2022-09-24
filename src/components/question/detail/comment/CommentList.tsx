import Pagination from '@/components/common/Pagination';
import CommentItem from '@/components/question/detail/comment/CommentItem';
import { useState } from 'react';

const CommentList = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const comments = [];

  const handlePageClick = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
      <Pagination totalPage={totalPage} currentPage={currentPage} onPageClick={handlePageClick} />
    </>
  );
};

export default CommentList;
