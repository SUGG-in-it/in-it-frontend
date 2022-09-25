import Button from '@/components/common/button/Button';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { uploadImage } from '@/api/images';
import { useRef } from 'react';
import styled from 'styled-components';
import { postAnswerId } from '@/api/answers';
import { useUploadAnswerMutation } from '@/hooks/queries/useAnswer';
import { QueryObserverResult } from 'react-query';
import { useRouter } from 'next/router';

interface EditorSectionProps {
  refetch?: () => Promise<QueryObserverResult<any, unknown>>;
  questionId: number;
  answerId?: number;
  content?: string;
  onCancelEdit?: () => void;
}

const EditorSection = ({ refetch, questionId, answerId, content, onCancelEdit }: EditorSectionProps) => {
  const editorRef = useRef(null);
  const mutationUploadAnswer = useUploadAnswerMutation({
    onSuccess: () => {
      refetch();
      onCancelEdit();
    },
  });

  const addImageBlobHook = async (file, callback) => {
    const { data } = await uploadImage(file);
    callback(data.url, '이미지');
  };

  const handleAnswerSubmit = async () => {
    const { data } = await postAnswerId(questionId);
    const answerId = data.answerId;
    mutationUploadAnswer.mutate({
      answerId: Number(answerId),
      content: editorRef.current?.getInstance().getHTML(),
    });
  };

  const handleAnswerEdit = async () => {
    mutationUploadAnswer.mutate({
      answerId: answerId,
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
        initialValue={content}
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
        {content ? (
          <PostButton onClick={handleAnswerEdit}>{'수정'}</PostButton>
        ) : (
          <PostButton onClick={handleAnswerSubmit}>{'등록'}</PostButton>
        )}
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
