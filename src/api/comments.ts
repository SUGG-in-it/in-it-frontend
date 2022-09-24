import { GET } from '@/api/config/base';
import { CommentPageRequestParams } from '@/types/request/comments';

export const getCommentPage = async (commentPageRequestParams: CommentPageRequestParams) => {
  const { data } = await GET('/comments/page', commentPageRequestParams);
  return data;
};
