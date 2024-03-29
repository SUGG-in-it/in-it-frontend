import { DELETE, GET, POST } from '@/api/config/base';
import { CommentPageRequestParams, CommentsRequestBody, UploadCommentRequestBody } from '@/types/request/comments';

export const getCommentPage = async (commentPageRequestParams: CommentPageRequestParams) => {
  const { data } = await GET('/comments/page', commentPageRequestParams);
  return data;
};

export const uploadComment = async (uploadCommentRequestBody: UploadCommentRequestBody) =>
  await POST(`/comments`, uploadCommentRequestBody);

export const getComments = async (commentsRequestBody: CommentsRequestBody) => {
  const { data } = await GET('/comments', commentsRequestBody);
  return data;
};

export const deleteComment = async (commentId: number) => await DELETE(`/comments/${commentId}`);
