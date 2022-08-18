import ToastEditor from '@/components/ToastEdtior';
import styled from 'styled-components';

const AnswerWriteSection = () => {
  return (
    <AnswerWriteSectionWrapper>
      <ToastEditorWrapper>
        <ToastEditor />
      </ToastEditorWrapper>
    </AnswerWriteSectionWrapper>
  );
};

const AnswerWriteSectionWrapper = styled.div`
  width: 80vw;
  max-width: 700px;
  margin: 3em auto;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AnswerWriteSection;
