import { CustomError } from '@/api/Error';
import { duplicateCheckEmail, join, login } from '@/api/users';
import { errorToast, successToast } from '@/utils/toastUtils';
import { MutationCallbacks } from '@/utils/types/MuationCallbacks';
import { useMutation } from 'react-query';

export const useLoginMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(login, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('로그인이 되었습니다. 환영합니다!');
    },
    onError: () => {
      onError && onError();
      // TODO 에러별로 처리 필요
      errorToast('');
    },
    // useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};

export const useJoinMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(join, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('회원가입이 완료 되었습니다.');
    },
    onError: () => {
      onError && onError();
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};

export const useEmailCheckMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(duplicateCheckEmail, {
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: () => {
      onError && onError();
      errorToast('이미 가입된 메일입니다.');
    },
  });
};
