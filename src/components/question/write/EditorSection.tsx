import Button from '@/components/common/button/Button';
import Input from '@/components/common/Input/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import useInput from '@/hooks/useInput';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { uploadImage } from '@/api/images';
import { useRef } from 'react';
import styled from 'styled-components';
import useValidationInput from '@/hooks/useValidationInput';
import { validateQuestionTitle } from '@/utils/validations';
import { media } from '@/styles/mediaQuery';

const EditorSection = () => {
  const question = useValidationInput('', validateQuestionTitle);
  const tag = useInput('');
  const power = useInput('');
  const editorRef = useRef(null);

  const addImageBlobHook = async (file, callback) => {
    const { data } = await uploadImage(file);
    callback(data.url, '이미지');
  };

  const handleQuestionSubmit = () => {
    console.log(editorRef.current?.getInstance().getHTML());
  };

  return (
    <>
      <LabelInput label="제목">
        <CustomInput input={question} type="text" placeholder="제목을 입력해주세요." />
      </LabelInput>
      <ToastEditorWrapper>
        <Editor
          ref={editorRef}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          initialEditType="wysiwyg"
          height="350px"
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
          hooks={{
            addImageBlobHook,
          }}
        />
      </ToastEditorWrapper>
      <LabelInput label="태그">
        <CustomInput input={tag} type="text" placeholder="태그를 입력해주세요." />
      </LabelInput>
      <LabelInput label="내공">
        <CustomInput input={power} type="number" placeholder="내공을 입력해주세요." />
      </LabelInput>
      <ButtonWrapper>
        <CancelButton>{'취소'}</CancelButton>
        <PostButton onClick={handleQuestionSubmit}>{'등록'}</PostButton>
      </ButtonWrapper>
    </>
  );
};

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

export default EditorSection;
