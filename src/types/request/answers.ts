export interface UploadAnswerRequestBody {
  answerId: number;
  content: string;
}

export interface AnswersRequestParams {
  page: number;
  size: number;
  questionId: number;
}

export interface AnswerPageRequestParams {
  size: number;
  questionId: number;
}
