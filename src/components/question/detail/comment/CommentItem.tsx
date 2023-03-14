import Button from '@/components/common/Button';
import { useDeleteCommentMutation } from '@/hooks/queries/useComments';
import { userState } from '@/store/users';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { media } from '@/styles/mediaQuery';

interface CommentProps {
  commentId: number;
  nickname: string;
  updatedAt: string;
  content: string;
  userId: number;
}

const CommentItem = ({ commentId, nickname, updatedAt, content, userId }: CommentProps) => {
  const user = useRecoilValue(userState);
  const deleteCommentMutation = useDeleteCommentMutation();
  const handleDeleteComment = () => {
    deleteCommentMutation.mutate(commentId);
  };

  return (
    <CommnetItemWrapper>
      <CommentHeader>
        <NickName>{`작성자 ${nickname}`}</NickName>
        <Date>{dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss')}</Date>
      </CommentHeader>
      <Content>{content}</Content>
      {user.id === userId && <SettingButton onClick={handleDeleteComment}>{'삭제'}</SettingButton>}
    </CommnetItemWrapper>
  );
};

const CommnetItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  align-items: baseline;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  border-radius: 5px;
  ${media.mobile} {
    flex-direction: column;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  width: 20%;
  ${media.mobile} {
    width: 100%;
  }
`;

const NickName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.grayColor};
  margin-top: 0.5em;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.grayColor};
  line-height: 1.5;
  margin-top: 1em;
  width: 70%;
  ${media.mobile} {
    margin-top: 0.5em;
  }
`;

const SettingButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.pointColor};
  font-weight: 400;
  font-size: 0.9rem;
  height: 30px;
  width: 10%;
  ${media.mobile} {
    width: 100%;
    text-align: end;
    margin: 0;
  }
`;

export default CommentItem;
