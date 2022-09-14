import { verifyCode } from '@/api/auth';
import { CustomError } from '@/api/config/error';
import { HttpStatusCode } from '@/api/config/status';
import { errorToast, successToast } from '@/utils/toast';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { useMutation } from '@tanstack/react-query';

export const useVerifyMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(verifyCode, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('이메일 인증이 확인되었습니다.');
    },
    onError: (error: CustomError) => {
      onError && onError();
      if (error.statusCode === HttpStatusCode.UNAUTHORIZED) {
        errorToast('인증번호가 올바르지 않습니다.');
      }
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};
