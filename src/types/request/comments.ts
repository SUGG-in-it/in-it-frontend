export interface CommentPageRequestParams {
  size: number;
  answerId: number;
}
export interface UploadCommentRequestBody {
  content: string;
  answerId: number;
}

export interface CommentsRequestBody {
  page: number;
  size: number;
  answerId: number;
}
