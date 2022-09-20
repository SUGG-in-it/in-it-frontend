import dynamic from 'next/dynamic';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
const EditorSection = dynamic(() => import('@/components/question/detail/answer/ToastEditor'), { ssr: false });

const AnswerWriteSection = () => {
  return (
    <AnswerWriteSectionWrapper>
      <ToastEditorWrapper>
        <Notice>{'지롱님, 답변해주세요! 😉'}</Notice>
        <EditorSectionWrapper>
          <EditorSection />
        </EditorSectionWrapper>
      </ToastEditorWrapper>
    </AnswerWriteSectionWrapper>
  );
};

const AnswerWriteSectionWrapper = styled.div`
  width: 85vw;
  max-width: 700px;
  margin: 3em auto;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 2em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
  ${media.mobile} {
    padding: 0;
    border: none;
    background-color: ${({ theme }) => theme.backgrondDarkColor};
  }
`;

const Notice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 1em;
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

export default AnswerWriteSection;
