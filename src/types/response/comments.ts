export interface CommentsResponseBody {
  comments: Comment[];
}

export interface Comment {
  commentId: number;
  content: string;
  nickname: string;
  updatedAt: string;
  userId: number;
}
