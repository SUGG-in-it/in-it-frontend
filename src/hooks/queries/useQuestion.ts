import { CustomError } from '@/api/config/error';
import { getQusetions, getMainContent, uploadQuestion, getQuestion, deleteQuestion } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { QusetionsRequestBody } from '@/types/request/questions';
import { MainContentResponseBody, QuestionResponseBody, QuestionsResponseBody } from '@/types/response/questions';
import { useQueries, useMutation, useQuery } from '@tanstack/react-query';
import { errorToast, successToast } from '@/utils/toast';

export const useQuestionsQuery = (qusetionsRequestBody: QusetionsRequestBody) => {
  const page = qusetionsRequestBody.page;
  const type = qusetionsRequestBody.type;

  const data = useQuery<QuestionsResponseBody>(
    [KEYS.QUESTIONS, { page, type }],
    () => getQusetions(qusetionsRequestBody),
    {
      suspense: true,
    }
  );
  return data;
};

export const useQuestionQuery = (questionId: number) => {
  const data = useQuery<QuestionResponseBody>([KEYS.QUESTION], () => getQuestion(questionId), {
    suspense: true,
    retry: 0,
  });
  return data;
};

export const useMainContentQueries = () => {
  const types = ['recent', 'point', 'random', 'popular'];

  return useQueries<MainContentResponseBody[]>({
    queries: types.map((type) => {
      return {
        queryKey: [KEYS.MAIN_CONTENT, type],
        queryFn: () => getMainContent(type),
      };
    }),
  });
};

export const useUploadQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(uploadQuestion, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('글 작성이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('글 작성에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};

export const useDeleteQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(deleteQuestion, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('글 삭제가 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('글 삭제에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};
