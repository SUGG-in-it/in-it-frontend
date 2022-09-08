import Button from '@/components/common/button/Button';
import dynamic from 'next/dynamic';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
const ToastEditor = dynamic(() => import('@/components/common/ToastEditor'), { ssr: false });

const AnswerWriteSection = () => {
  const handleClick = () => {
    // TODO: 답변 등록 api 호출
  };

  return (
    <AnswerWriteSectionWrapper>
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
