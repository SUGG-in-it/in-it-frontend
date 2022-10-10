import Button from '@/components/common/button/Button';
import Input from '@/components/common/Input/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import useInput from '@/hooks/useInput';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { uploadImage } from '@/api/images';
import { Suspense, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useValidationInput from '@/hooks/useValidationInput';
import { validateQuestionTitle, VALIDATION_ERROR_MSG } from '@/utils/validations';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useQuestionQuery, useUploadQuestionMutation } from '@/hooks/queries/useQuestion';
import ValidationInput from '@/components/common/Input/ValidationInput';
import Skeleton from 'react-loading-skeleton';
import QuestionSkelton from '@/components/common/skelton/QuestionSkelton';
import { FiRefreshCcw } from 'react-icons/fi';
import { ErrorBoundary } from 'react-error-boundary';
import AutoComplete from '@/components/common/AutoComplete';
import TagsWithDeleteButton from '@/components/common/tag/TagsWithDeleteButton';

const QuestionsFallback = ({ error, resetErrorBoundary }) => (
  <QuestionContainer>
    <RetryBox>
      <p>질문을 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </QuestionContainer>
);

const QuestionsLoading = () => <Skeleton wrapper={QuestionSkelton} count={5} />;

const QuestionEditor = () => {
  const title = useValidationInput('', validateQuestionTitle);
  const [tagList, setTagList] = useState<string[]>([]);
  const point = useInput('0');
  const searchWord = useInput('');
  const editorRef = useRef(null);
  const router = useRouter();
  const questionId = Number(router.query.id);

  const { data: question } = useQuestionQuery(questionId);

  useEffect(() => {
    title.setValue(question.title || '');
    point.setValue(String(question.point || 0));
    editorRef.current?.getInstance().setHTML(question.content || '');
  }, [question]);

  const mutationUploadQuestion = useUploadQuestionMutation({
    onSuccess: () => {
      router.push('/');
    },
  });

  const addImageBlobHook = async (file, callback) => {
    const { data } = await uploadImage(file);
    callback(data.url, '이미지');
  };

  const handleQuestionSubmit = async () => {
    title.checkValidation();

    if (title.isValid) {
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
    <>
      <LabelInput label="제목">
        <ValidationInput
          type="text"
          placeholder="제목을 입력해주세요."
          value={title.value}
          onChange={title.onChange}
          isValid={title.isValid}
          msg={VALIDATION_ERROR_MSG.EMPTY_TITLE}
        />
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
      <AutoComplete searchWord={searchWord} handleTagList={handleTagList} />
      <LabelInput label="내공">
        <CustomInput value={point.value} onChange={point.onChange} type="number" placeholder="내공을 입력해주세요." />
      </LabelInput>
      <ButtonWrapper>
        <CancelButton onClick={handleCancle}>{'취소'}</CancelButton>
        <PostButton onClick={handleQuestionSubmit}>{'등록'}</PostButton>
      </ButtonWrapper>
    </>
  );
};

const EditorSection = () => {
  return (
    <ErrorBoundary FallbackComponent={QuestionsFallback}>
      <Suspense fallback={<QuestionsLoading />}>
        <QuestionEditor />
      </Suspense>
    </ErrorBoundary>
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

const QuestionContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 6em;
`;

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRefreshCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

const TagLimit = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 1em;
`;

export default EditorSection;
