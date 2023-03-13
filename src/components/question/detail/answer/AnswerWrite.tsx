import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { uploadImage } from '@/api/images';
import { useRef } from 'react';
import styled from 'styled-components';
import { postAnswerId } from '@/api/answers';
import { useUploadAnswerMutation } from '@/hooks/queries/useAnswer';
import APIButton from '@/components/common/Button/APIButton';

interface EditorSectionProps {
  questionId: number;
  answerId?: number;
  content: string;
  onCancelEdit?: () => void;
}

const EditorSection = ({ questionId, answerId, content, onCancelEdit }: EditorSectionProps) => {
  const editorRef = useRef(null);
  const mutationUploadAnswer = useUploadAnswerMutation({
    onSuccess: () => {
      editorRef.current?.getInstance().setMarkdown('');
    },
  });

  const mutationEditAnswer = useUploadAnswerMutation({
    onSuccess: () => {
      editorRef.current?.getInstance().setMarkdown('');
      onCancelEdit();
    },
  });

  const addImageBlobHook = async (file, callback) => {
    const { data } = await uploadImage(file);
    callback(data.url, '이미지');
  };

  const handleAnswerSubmit = async () => {
    const data = await postAnswerId(questionId);
    if (data?.answerId) {
      const answerId = data?.answerId;
      mutationUploadAnswer.mutate({
        answerId: Number(answerId),
        content: editorRef.current?.getInstance().get(),
      });
    }
  };

  const handleAnswerEdit = async () => {
    mutationEditAnswer.mutate({
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
        initialEditType="markdown"
        initialValue={'<p>' + content + '</p>'}
        height="350px"
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        hideModeSwitch
        hooks={{
          addImageBlobHook,
        }}
      />
      <ButtonWrapper>
        {content ? (
          <PostButton onClick={handleAnswerEdit} isLoading={mutationEditAnswer.isLoading}>
            {'수정'}
          </PostButton>
        ) : (
          <PostButton onClick={handleAnswerSubmit} isLoading={mutationUploadAnswer.isLoading}>
            {'등록'}
          </PostButton>
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

const PostButton = styled(APIButton)`
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100px;
  margin-top: 2em;
`;

export default EditorSection;
