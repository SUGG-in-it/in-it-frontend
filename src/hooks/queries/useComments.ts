import { uploadComment } from '@/api/comments';
import { CustomError } from '@/api/config/error';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation } from '@tanstack/react-query';

export const useUploadCommentMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(uploadComment, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('댓글 작성이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('댓글 작성에 실패했습니다. 😭');
    },
    useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
  });
};
