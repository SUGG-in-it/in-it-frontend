import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import ToastEditor from '@/components/ToastEdtior';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import BannerSection from '@/pages/QuestionWrite/BannerSection';
import { media } from '@/styles/mediaQuery';
import { validateQuestionTitle } from '@/utils/validations';
import styled from 'styled-components';

const QuestionWritePage = () => {
  const question = useValidationInput('', validateQuestionTitle);
  const tag = useInput('');
  const power = useInput('');

  return (
    <>
      <BannerSection />
      <QuestionWriteContainer>
        <LabelInput label="제목">
          <CustomInput input={question} type="text" placeholder="제목을 입력해주세요." />
        </LabelInput>
        <ToastEditorWrapper>
          <ToastEditor />
        </ToastEditorWrapper>
        <LabelInput label="태그">
          <CustomInput input={tag} type="text" placeholder="태그를 입력해주세요." />
        </LabelInput>
        <LabelInput label="내공">
          <CustomInput input={power} type="number" placeholder="내공을 입력해주세요." />
        </LabelInput>
        <ButtonWrapper>
          <CancelButton>{'취소'}</CancelButton>
          <PostButton>{'등록'}</PostButton>
        </ButtonWrapper>
      </QuestionWriteContainer>
    </>
  );
};

const QuestionWriteContainer = styled.div`
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

const CustomInput = styled(Input)`
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: fit-content;
  margin-bottom: 2em;
  ${media.mobile} {
    margin-bottom: 1em;
  }
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  width: 100px;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin-right: 1em;
`;

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100px;
`;

export default QuestionWritePage;
