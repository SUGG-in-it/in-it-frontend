import Button from '@/components/common/button/Button';
import Input from '@/components/common/Input/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import useInput from '@/hooks/useInput';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useQuestionQuery, useUploadQuestionMutation } from '@/hooks/queries/useQuestion';
import AutoComplete from '@/components/common/AutoComplete';
import TagsWithDeleteButton from '@/components/common/tagsWithDeleteButton';
import APIButton from '@/components/common/button/APIButton';
import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import EditorSkeleton from '@/components/question/write/EditorSection/index.skeleton';
import { useUploadImageMutation } from '@/hooks/queries/useImage';

const QuestionEditor = () => {
  const title = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const point = useInput('0');
  const searchTag = useInput('');
  const editorRef = useRef(null);
  const router = useRouter();
  const questionId = Number(router.query.id);

  const { data: question } = useQuestionQuery(questionId);

  const mutationUploadQuestion = useUploadQuestionMutation({
    onSuccess: () => {
      router.push('/');
    },
  });

  const mutationUploadImage = useUploadImageMutation({});

  useEffect(() => {
    title.setValue(question.title || '');
    point.setValue(String(question.point || 0));
    if (question.tagList && question.tagList.length) {
      setTagList(question.tagList.split(','));
    } else {
      setTagList([]);
    }
    editorRef.current?.getInstance().setHTML(question.content || '');
  }, [question]);

  const addImageBlobHook = async (file, callback) => {
    mutationUploadImage.mutate(file, {
      onSuccess: (data) => {
        callback(data.data.url, '이미지');
      },
    });
  };

  const handleQuestionSubmit = async () => {
    if (title.value && editorRef.current?.getInstance().getHTML()) {
      mutationUploadQuestion.mutate({
        questionId: Number(questionId),
        title: title.value,
        content: editorRef.current?.getInstance().getHTML(),
        tagList: tagList.join(','),
        point: Number(point.value),
      });
    }
  };

  const handleCancle = () => {
    router.back();
  };

  const handleTagList = (tag: string) => {
    if (!tagList.includes(tag)) {
      setTagList((tagList) => [...tagList, tag]);
    }
  };

  return (
    <WriteContainer>
      <LabelInput label="제목" htmlFor='title'>
        <CustomInput id='title' value={title.value} onChange={title.onChange} placeholder="제목을 입력해주세요." />
      </LabelInput>
      <ToastEditorWrapper>
        <Editor
          ref={editorRef}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          initialEditType="wysiwyg"
          initialValue={'<p></p>'}
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
      <TagLimit>최대 5개의 태그를 입력할 수 있습니다 !</TagLimit>
      <TagsWithDeleteButton tagList={tagList} setTagList={setTagList} />
      <AutoComplete searchTag={searchTag} handleTagList={handleTagList} />
      <LabelInput label="포인트" htmlFor='point'>
        <CustomInput id='point' value={point.value} onChange={point.onChange} type="number" placeholder="포인트를 입력해주세요." />
      </LabelInput>
      <ButtonWrapper>
        <CancelButton onClick={handleCancle}>{'취소'}</CancelButton>
        <PostButton onClick={handleQuestionSubmit} isLoading={mutationUploadQuestion.isLoading}>
          {'등록'}
        </PostButton>
      </ButtonWrapper>
    </WriteContainer>
  );
};

const EditorSection = () => {
  return (
    <RetryErrorBoundary>
      <Suspense fallback={<EditorSkeleton />}>
        <QuestionEditor />
      </Suspense>
    </RetryErrorBoundary>
  );
};

const WriteContainer = styled.div`
  width: 100%;
`;

const ToastEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const PostButton = styled(APIButton)`
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
    width: calc(100% - 1em);
  }
`;

const TagLimit = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 1em;
`;

export default EditorSection;
