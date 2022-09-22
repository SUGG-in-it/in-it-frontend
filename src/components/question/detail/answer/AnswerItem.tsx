import CommentSection from '@/components/question/detail/comment/CommentSection';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/users';
import Button from '@/components/common/button/Button';
import { Question } from '@/types/response/questions';
import { useSelectAnswerMutation } from '@/hooks/queries/useAnswer';

interface AnswerProps {
  id: number;
  nickName: string;
  date: string;
  content: string;
  userId: number;
  question: Question;
}

const AnswerItem = ({ id, nickName, date, content, userId, question }: AnswerProps) => {
  const user = useRecoilValue(userState);
  const mutationSelectAnswer = useSelectAnswerMutation({});

  const handleEditQuestion = () => {
    //
  };

  const handleDeleteQuestion = () => {
    //
  };

  const handleSelectAnswer = () => {
    mutationSelectAnswer.mutate(id);
  };

  return (
    <>
      <ButtonWrapper>
        {user.id === question.userId && question.type === 'doing' && (
          <SelectButton onClick={handleSelectAnswer}>{'답변 채택하기 ☺️'}</SelectButton>
        )}
      </ButtonWrapper>
      <AnswerItemWrapper>
        <AnswerHeader>
          <div>
            <NickName>{`작성자 ${nickName}`}</NickName>
            <Date>{date}</Date>
          </div>
          {user.id === userId && (
            <div>
              <SettingButton onClick={handleEditQuestion}>{'수정'}</SettingButton>
              <SettingButton>|</SettingButton>
              <SettingButton onClick={handleDeleteQuestion}>{'삭제'}</SettingButton>
            </div>
          )}
        </AnswerHeader>
        <Content
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        />
        <CommentSection />
      </AnswerItemWrapper>
    </>
  );
};

const AnswerItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 1em;
  margin-top: 1em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  margin-bottom: 3em;
`;

const AnswerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
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
`;

const SettingButton = styled(Button)`
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: #616568;
  font-weight: 400;
  font-size: 0.9rem;
  height: 30px;
`;

const SelectButton = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.5em;
  cursor: pointer;
  width: 150px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export default AnswerItem;
