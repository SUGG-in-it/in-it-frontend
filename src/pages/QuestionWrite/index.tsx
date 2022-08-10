import ToastEditor from '@/components/ToastEdtior';
import styled from 'styled-components';

const QuestionWritePage = () => {
  return (
    <QuestionWriteContainer>
      <ToastEditorWrapper>
        <ToastEditor />
      </ToastEditorWrapper>
    </QuestionWriteContainer>
  );
};

const QuestionWriteContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 100px;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
`;

export default QuestionWritePage;
