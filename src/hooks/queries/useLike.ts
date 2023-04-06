import { CustomError } from '@/api/config/error';
import { likeQuestion, unLikeQuestion } from '@/api/likes';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLikeQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(likeQuestion, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.QUESTION]);
    },
    onError: (error: CustomError) => {
      onError && onError();
    },
  });
};

export const useUnLikeQuestionMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(unLikeQuestion, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.QUESTION]);
    },
    onError: (error: CustomError) => {
      onError && onError();
    },
  });
};
