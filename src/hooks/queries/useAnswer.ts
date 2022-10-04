import { deleteAnswer, getAnswers, selectAnswer, uploadAnswer } from '@/api/answers';
import { CustomError } from '@/api/config/error';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { AnswersRequestParams } from '@/types/request/answers';
import { AnswersResponseBody } from '@/types/response/answers';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useUploadAnswerMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(uploadAnswer, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.ANSWERS]);
      queryClient.invalidateQueries([KEYS.QUESTION]);
      successToast('답변 작성이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('답변 작성에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};

export const useAnswersQuery = (answersRequestParams: AnswersRequestParams) => {
  const page = answersRequestParams.page;
  const questionId = answersRequestParams.questionId;

  const data = useQuery<AnswersResponseBody>(
    [KEYS.ANSWERS, { page: page, questionId: questionId }],
    () => getAnswers(answersRequestParams),
    {
      suspense: true,
    }
  );
  return data;
};

export const useSelectAnswerMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(selectAnswer, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.ANSWERS]);
      queryClient.invalidateQueries([KEYS.QUESTION]);
      successToast('답변이 채택되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('답변 채택에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};

export const useDeleteAnswerMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAnswer, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.ANSWERS]);
      queryClient.invalidateQueries([KEYS.QUESTION]);
      successToast('답변 삭제가 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('답변 삭제에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};
