import { CustomError } from '@/api/Error';
import { login } from '@/api/users';
import { useMutation } from 'react-query';

export const useLoginMutation = () => {
  return useMutation(login, {
    onSuccess: () => {
      console.log('ok');
    },
    onError: (e: CustomError) => {
      console.log('useLoginMutation', e.statusCode);
      // throw e;
    },
    useErrorBoundary: true,
  });
};
