import CommentSection from '@/components/question/detail/comment/CommentSection';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/users';
import Button from '@/components/common/button/Button';
import { Question } from '@/types/response/questions';
import { useDeleteAnswerMutation, useSelectAnswerMutation } from '@/hooks/queries/useAnswer';
import { QueryObserverResult } from 'react-query';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { media } from '@/styles/mediaQuery';

const EditorSection = dynamic(() => import('@/components/question/detail/answer/EditorSection'), { ssr: false });

interface AnswerProps {
  id: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
  question: Question;
  refetch: () => Promise<QueryObserverResult<any, unknown>>;
}

const AnswerItem = ({ id, nickname, date, content, userId, question, refetch }: AnswerProps) => {
  const user = useRecoilValue(userState);
  const [isEditMode, setIsEditMode] = useState(false);
  const mutationSelectAnswer = useSelectAnswerMutation({});
  const mutationDeleteAnswer = useDeleteAnswerMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const handleEditQuestion = () => {
    setIsEditMode(true);
  };

  const handleDeleteQuestion = () => {
    mutationDeleteAnswer.mutate(id);
  };

  const handleSelectAnswer = () => {
    mutationSelectAnswer.mutate(id);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
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
            <NickName>{`작성자 ${nickname}`}</NickName>
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
        {isEditMode ? (
          <EditorSectionWrapper>
            <EditorSection
              questionId={question.questionId}
              content={content}
              answerId={id}
              onCancelEdit={handleCancelEdit}
            />
          </EditorSectionWrapper>
        ) : (
          <>
            <Content
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
            />
            <CommentSection answerId={id} />
          </>
        )}
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

const EditorSectionWrapper = styled.div`
  width: 85vw;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 3em;
  padding-bottom: 5em;
  flex-direction: column;
  ${media.tablet} {
    margin-left: 7vw;
  }
`;

export default AnswerItem;
