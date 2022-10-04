import styled from 'styled-components';

interface CommentProps {
  commentId: number;
  nickname: string;
  updatedAt: string;
  content: string;
}

const CommentItem = ({ commentId, nickname, updatedAt, content }: CommentProps) => {
  return (
    <AnswerItemWrapper>
      <AnswerHeader>
        <NickName>{`작성자 ${nickname}`}</NickName>
        <Date>{updatedAt}</Date>
      </AnswerHeader>
      <Content>{content}</Content>
    </AnswerItemWrapper>
  );
};

const AnswerItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  align-items: baseline;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  border-radius: 5px;
`;

const AnswerHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  width: 20%;
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
  width: 80%;
`;

export default CommentItem;
