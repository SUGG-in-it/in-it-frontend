import Button from '@/components/Button';
import ToastEditor from '@/components/ToastEdtior';
import { QLabel } from '@/styles/commonStyles';
import styled from 'styled-components';

const AnswerWriteSection = () => {
  const handleClick = () => {
    // TODO: 답변 등록 api 호출
  };

  return (
    <AnswerWriteSectionWrapper>
      <AnswerWriteHeader>
        <QLabel>{'A.'}</QLabel>
        <Label>{'총 0개의 답변이 달렸습니다.'}</Label>
      </AnswerWriteHeader>
      <ToastEditorWrapper>
        <Notice>{'지롱님, 답변해주세요! 😉'}</Notice>
        <ToastEditor />
        <ButtonWrapper>
          <PostButton onClick={handleClick}>{'답변 등록'}</PostButton>
        </ButtonWrapper>
      </ToastEditorWrapper>
    </AnswerWriteSectionWrapper>
  );
};

const AnswerWriteSectionWrapper = styled.div`
  width: 80vw;
  max-width: 700px;
  margin: 3em auto;
`;

const AnswerWriteHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 2em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.grayColor};
`;

const Notice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 200px;
  margin-top: 2em;
`;

export default AnswerWriteSection;
