import { CustomError } from '@/api/config/error';
import { HttpStatusCode } from '@/api/config/status';
import { duplicateCheckEmail, join, login } from '@/api/users';
import { errorToast, successToast } from '@/utils/toast';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(login, {
    onSuccess: (data: any) => {
      const { accessToken, refreshToken } = data.data;
      onSuccess && onSuccess();

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      successToast('로그인이 되었습니다. 환영합니다!');
    },
    onError: (error: CustomError) => {
      onError && onError();
      if (error.statusCode === HttpStatusCode.UNAUTHORIZED || error.statusCode === HttpStatusCode.NOT_FOUND) {
        errorToast('아이디 혹은 비밀번호가 일치하지 않습니다.');
      }
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
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
    onError: (error: CustomError) => {
      onError && onError();
      if (error.statusCode === HttpStatusCode.CONFLICT) {
        errorToast('이미 가입된 메일입니다.');
      }
    },
  });
};
