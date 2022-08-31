import Input from '@/components/Input';
import ValidationInput from '@/components/Input/ValidationInput';
import ToastEditor from '@/components/ToastEdtior';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import { QLabel } from '@/styles/commonStyles';
import { media } from '@/styles/mediaQuery';
import { validateQuestionTitle } from '@/utils/validations';
import styled from 'styled-components';

const QuestionWritePage = () => {
  const question = useValidationInput('', validateQuestionTitle);
  const tag = useInput('');
  const power = useInput('');

  return (
    <QuestionWriteContainer>
      <QContainer>
        <QLabel>Q.</QLabel>
        <QuestionInput input={question} type="text" />
      </QContainer>
      <ToastEditorWrapper>
        <ToastEditor />
      </ToastEditorWrapper>
      <TagContainer>
        <Label>태그</Label>
        <TagInput input={tag} type="text" placeholder="#리액트 #자바" />
      </TagContainer>
      <PowerContainer>
        <Label>내공</Label>
        <TagInput input={power} type="number" placeholder="100" />
      </PowerContainer>
    </QuestionWriteContainer>
  );
};

const QuestionWriteContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  ${media.tablet} {
    margin-left: 13vw;
  }
  ${media.mobile} {
    margin-left: 7vw;
  }
`;

const QuestionInput = styled(ValidationInput)`
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 60vw;
  max-width: 550px;
  height: fit-content;
`;

const TagInput = styled(Input)`
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 30vw;
  height: fit-content;
  margin-left: 20px;
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

const Label = styled.p`
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.pointColor};
`;

export default QuestionWritePage;
