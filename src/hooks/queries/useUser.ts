import { CustomError } from '@/api/Error';
import { join, login } from '@/api/users';
import { MutationCallbacks } from '@/utils/types/MuationCallbacks';
import { useMutation } from 'react-query';

export const useLoginMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(login, {
    onSuccess: () => {
      onSuccess();
    },
    onError: (e: CustomError) => {
      onError();
    },
  });
};

export const useJoinMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(join, {
    onSuccess: () => {
      onSuccess();
    },
    onError: (e: CustomError) => {
      onError();
    },
  });
};
