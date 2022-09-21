import Button from '@/components/common/button/Button';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { uploadImage } from '@/api/images';
import { useRef } from 'react';
import styled from 'styled-components';
import { postAnswerId } from '@/api/answers';
import { useUploadAnswerMutation } from '@/hooks/queries/useAnswer';
import { QueryObserverResult } from 'react-query';

const EditorSection = ({ refetch }: { refetch?: () => Promise<QueryObserverResult<any, unknown>> }) => {
  const editorRef = useRef(null);
  const mutationUploadAnswer = useUploadAnswerMutation({
    onSuccess: () => {
      refetch();
    },
  });

  const addImageBlobHook = async (file, callback) => {
    const { data } = await uploadImage(file);
    callback(data.url, '이미지');
  };

  const handleQuestionSubmit = async () => {
    const { data } = await postAnswerId();
    const answerId = data.answerId;
    mutationUploadAnswer.mutate({
      answerId: Number(answerId),
      content: editorRef.current?.getInstance().getHTML(),
    });
  };

  return (
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
      <ButtonWrapper>
        <PostButton onClick={handleQuestionSubmit}>{'등록'}</PostButton>
      </ButtonWrapper>
    </ToastEditorWrapper>
  );
};

const ToastEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PostButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100px;
  margin-top: 2em;
`;

export default EditorSection;
