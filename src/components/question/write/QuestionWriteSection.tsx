import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const EditorSection = dynamic(() => import('@/components/question/write/EditorSection'), { ssr: false });

const QuestionWriteSection = () => {
  return (
    <EditorSectionWrapper>
      <EditorSection />
    </EditorSectionWrapper>
  );
};

const EditorSectionWrapper = styled.div`
  width: 85vw;
  max-width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 3em;
  padding-bottom: 5em;
  flex-direction: column;
  ${media.tablet} {
    margin-left: 7vw;
  }
`;

export default QuestionWriteSection;
