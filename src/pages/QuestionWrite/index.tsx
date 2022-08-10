import { PrimaryColor } from '@/assets/colors';
import Input from '@/components/Input';
import ValidationInput from '@/components/Input/ValidationInput';
import ToastEditor from '@/components/ToastEdtior';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import styled from 'styled-components';

const QuestionWritePage = () => {
  const question = useValidationInput('', 'question');
  const tag = useInput('');
  const power = useInput('');

  return (
    <QuestionWriteContainer>
      <QContainer>
        <QLable>Q.</QLable>
        <ValidationInput input={question} type="text" className={'question-input'} />
      </QContainer>
      <ToastEditorWrapper>
        <ToastEditor />
      </ToastEditorWrapper>
      <TagContainer>
        <Label>태그</Label>
        <Input input={tag} type="text" placeholder="#리액트 #자바" className="tag-input" />
      </TagContainer>
      <PowerContainer>
        <Label>내공</Label>
        <Input input={power} type="number" placeholder="100" className="tag-input" />
      </PowerContainer>
    </QuestionWriteContainer>
  );
};

const QuestionWriteContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 100px;
  .question-input {
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 30vw;
    height: fit-content;
  }
  .tag-input {
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 30vw;
    height: fit-content;
    margin-left: 20px;
  }
`;

const QContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const PowerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QLable = styled.h1`
  font-size: 3rem;
  margin-right: 20px;
  color: ${PrimaryColor};
`;

const Label = styled.p`
  font-size: 1.3rem;
  color: ${PrimaryColor};
`;

export default QuestionWritePage;
