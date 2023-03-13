import CommentSection from '@/components/question/detail/comment/CommentSection';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/users';
import Button from '@/components/common/Button';
import { Question } from '@/types/response/questions';
import { useDeleteAnswerMutation, useSelectAnswerMutation } from '@/hooks/queries/useAnswer';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { media } from '@/styles/mediaQuery';
import { AiFillCheckCircle } from 'react-icons/ai';
import APIButton from '@/components/common/Button/APIButton';

const EditorSection = dynamic(() => import('@/components/question/detail/answer/EditorSection'), { ssr: false });
const ContentViewer = dynamic(() => import('@/components/common/ContentViewer'), { ssr: false });

interface AnswerProps {
  answerId: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
  question: Question;
  selected: boolean;
}

const AnswerItem = ({ answerId, nickname, date, content, userId, question, selected }: AnswerProps) => {
  const user = useRecoilValue(userState);
  const [isEditMode, setIsEditMode] = useState(false);
  const mutationSelectAnswer = useSelectAnswerMutation({});
  const mutationDeleteAnswer = useDeleteAnswerMutation({});

  const handleEditQuestion = () => {
    setIsEditMode(true);
  };

  const handleDeleteQuestion = () => {
    mutationDeleteAnswer.mutate(answerId);
  };

  const handleSelectAnswer = () => {
    mutationSelectAnswer.mutate(answerId);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  return (
    <>
      <ButtonWrapper>
        {user.id === question.userId && question.type === 'doing' && (
          <SelectButton onClick={handleSelectAnswer} isLoading={mutationSelectAnswer.isLoading}>
            {'답변 채택하기 ☺️'}
          </SelectButton>
        )}
      </ButtonWrapper>
      {question.type === 'completed' && selected && (
        <SelectedBox>
          <CheckIcon />
          <SelectedAnswer>{'채택된 답변입니다 ☺️'}</SelectedAnswer>
        </SelectedBox>
      )}
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
              answerId={answerId}
              onCancelEdit={handleCancelEdit}
            />
          </EditorSectionWrapper>
        ) : (
          <>
            <ContentViewer content={content} />
            <CommentSection answerId={answerId} />
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
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  margin-bottom: 4em;
  ${media.mobile} {
    margin-bottom: 2em;
  }
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

const Content = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.grayColor};
  line-height: 1.5;
  margin-top: 1em;
  img {
    width: 100%;
  }
`;

const SettingButton = styled(Button)`
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: #616568;
  font-weight: 400;
  font-size: 0.9rem;
  height: 30px;
`;

const SelectButton = styled(APIButton)`
  border: none;
  color: white;
  padding: 0.5em;
  cursor: pointer;
  width: 150px;
  margin-bottom: 1em;
`;

const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.pointColor};
`;

const CheckIcon = styled(AiFillCheckCircle)`
  width: 20px;
  height: 20px;
`;

const SelectedAnswer = styled.p`
  font-weight: bold;
  padding: 0.5em;
  font-size: 1rem;
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
