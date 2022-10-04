import { getComments, uploadComment } from '@/api/comments';
import { CustomError } from '@/api/config/error';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { CommentsRequestBody } from '@/types/request/comments';
import { CommentsResponseBody } from '@/types/response/comments';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useCommentsQuery = (commentsRequestBody: CommentsRequestBody) => {
  const page = commentsRequestBody.page;
  const data = useQuery<CommentsResponseBody>([KEYS.COMMENTS, { page }], () => getComments(commentsRequestBody), {
    suspense: true,
  });
  return data;
};

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
