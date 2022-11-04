import { deleteComment, getCommentPage, getComments, uploadComment } from '@/api/comments';
import { CustomError } from '@/api/config/error';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { CommentPageRequestParams, CommentsRequestBody } from '@/types/request/comments';
import { CommentPageResponseBody, CommentsResponseBody } from '@/types/response/comments';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useCommentsQuery = (commentsRequestBody: CommentsRequestBody) => {
  const page = commentsRequestBody.page;
  const data = useQuery<CommentsResponseBody>([KEYS.COMMENTS, { page }], () => getComments(commentsRequestBody));
  return data;
};

export const useUploadCommentMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(uploadComment, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.COMMENTS]);
      successToast('댓글 작성이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('댓글 작성에 실패했습니다. 😭');
    },
  });
};

export const useDeleteCommentMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(deleteComment, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.COMMENTS]);
      successToast('댓글 삭제가 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('댓글 삭제에 실패했습니다. 😭');
    },
  });
};

export const useCommentPageQuery = (commentPageRequestParams: CommentPageRequestParams) => {
  const answerId = commentPageRequestParams.answerId;
  const data = useQuery<CommentPageResponseBody>(
    [KEYS.COMMENTS_PAGE, { answerId }],
    () => getCommentPage(commentPageRequestParams),
    {
      suspense: false,
    }
  );
  return data;
};
