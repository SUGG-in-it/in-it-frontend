import { CustomError } from '@/api/config/error';
import { getQusetions, uploadQuestion } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { QusetionsRequestBody } from '@/types/request/questions';
import { QuestionsResponseBody } from '@/types/response/questions';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useQuestions = (qusetionsRequestBody: QusetionsRequestBody) => {
  return useQuery<QuestionsResponseBody>([KEYS.QUESTIONS], () => getQusetions(qusetionsRequestBody), {
    suspense: true,
  });
};

export const useUploadQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(uploadQuestion, {
    onSuccess: (data: any) => {
      const { accessToken, refreshToken } = data.data;
      onSuccess && onSuccess();

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      successToast('글 작성이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('글 작성에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};
