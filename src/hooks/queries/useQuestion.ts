import { CustomError } from '@/api/config/error';
import {
  getQusetions,
  getMainContent,
  uploadQuestion,
  getQuestion,
  deleteQuestion,
  getUserQusetions,
  getQuestionPage,
} from '@/api/questions';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { QuestionPageRequestBody, QusetionsRequestBody, UserQusetionsRequestBody } from '@/types/request/questions';
import {
  MainContentResponseBody,
  QuestionResponseBody,
  QuestionPageResponseBody,
  QuestionsResponseBody,
} from '@/types/response/questions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { errorToast, successToast } from '@/utils/toast';

export const useQuestionsQuery = (qusetionsRequestBody: QusetionsRequestBody) => {
  const page = qusetionsRequestBody.page;
  const type = qusetionsRequestBody.type;

  const data = useQuery<QuestionsResponseBody>([KEYS.QUESTIONS, { page, type }], () =>
    getQusetions(qusetionsRequestBody)
  );
  return data;
};

export const useQuestionPageQuery = (questionPageRequestBody: QuestionPageRequestBody) => {
  const type = questionPageRequestBody.type;

  const data = useQuery<QuestionPageResponseBody>(
    [KEYS.QUESTIONS_PAGE, { type }],
    () => getQuestionPage(questionPageRequestBody),
    {
      suspense: false,
    }
  );
  return data;
};
export const useUserQuestionsQuery = (userQusetionsRequestBody: UserQusetionsRequestBody) => {
  const page = userQusetionsRequestBody.page;

  const data = useQuery<QuestionsResponseBody>([KEYS.USER_QUESTIONS, { page }], () =>
    getUserQusetions(userQusetionsRequestBody)
  );
  return data;
};

export const useQuestionQuery = (questionId: number) => {
  const data = useQuery<QuestionResponseBody>([KEYS.QUESTION], () => getQuestion(questionId));
  return data;
};

export const useMainContentQuery = (type: string) => {
  const data = useQuery<MainContentResponseBody>([KEYS.MAIN_CONTENT, type], () => getMainContent(type), {
    suspense: false,
  });
  return data;
};

export const useUploadQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(uploadQuestion, {
    onSuccess: () => {
      successToast('글 작성이 완료되었습니다. 🥰');
      onSuccess && onSuccess();
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('글 작성에 실패했습니다. 😭');
    },
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
  });
};
