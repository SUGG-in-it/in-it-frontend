import { CustomError } from '@/api/config/error';
import { getQusetions, getMainContent, uploadQuestion } from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { QusetionsRequestBody } from '@/types/request/questions';
import { MainContentResponseBody, QuestionsResponseBody } from '@/types/response/questions';
import { useQueries, useMutation, useQuery } from '@tanstack/react-query';
import { errorToast, successToast } from '@/utils/toast';

export const useQuestions = (qusetionsRequestBody: QusetionsRequestBody) => {
  return useQuery<QuestionsResponseBody>([KEYS.QUESTIONS], () => getQusetions(qusetionsRequestBody), {
    suspense: true,
  });
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
