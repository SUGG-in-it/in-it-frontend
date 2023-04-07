import { likeQuestion, unLikeQuestion } from '@/api/likes';
import { KEYS } from '@/constants/reactQuery';
import { Question } from '@/types/response/questions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLikeQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(likeQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries([KEYS.QUESTION]);
    },
    onMutate: (questionId) => {
      queryClient.cancelQueries([KEYS.QUESTION, { questionId }]);
      const snapshotOfPreviousQuestion = queryClient.getQueryData<Question>([KEYS.QUESTION, { questionId }]);

      if (snapshotOfPreviousQuestion) {
        queryClient.setQueryData([KEYS.QUESTION, { questionId }], () => {
          return { ...snapshotOfPreviousQuestion, isLike: true, likeCount: snapshotOfPreviousQuestion.likeCount + 1 };
        });
      }
      return () => queryClient.setQueryData([KEYS.QUESTION, { questionId }], snapshotOfPreviousQuestion);
    },
    onError: (error, values, rollback) => {
      rollback && rollback();
    },
  });
};

export const useUnLikeQuestionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(unLikeQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries([KEYS.QUESTION]);
    },
    onMutate: (questionId) => {
      queryClient.cancelQueries([KEYS.QUESTION, { questionId }]);
      const snapshotOfPreviousQuestion = queryClient.getQueryData<Question>([KEYS.QUESTION, { questionId }]);
      if (snapshotOfPreviousQuestion) {
        queryClient.setQueryData([KEYS.QUESTION, { questionId }], () => {
          return { ...snapshotOfPreviousQuestion, isLike: false, likeCount: snapshotOfPreviousQuestion.likeCount - 1 };
        });
      }
      return () => queryClient.setQueryData([KEYS.QUESTION, { questionId }], snapshotOfPreviousQuestion);
    },
    onError: (error, values, rollback) => {
      rollback && rollback();
    },
  });
};
