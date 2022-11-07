export interface QusetionsRequestBody {
  page: number;
  size: number;
  type: string;
}

export interface SearchQusetionsPageRequestParams {
  query?: string;
  size: number;
  type: string;
  tag?: string;
}

export interface SearchQusetionsRequestParams {
  query?: string;
  size: number;
  type: string;
  tag?: string;
  page: number;
}

export interface UserQusetionsRequestBody {
  page: number;
  size: number;
}

export interface QuestionPageRequestBody {
  size: number;
  type: 'total' | 'doing' | 'completed';
}

export interface UploadQuestionRequestBody {
  questionId: number;
  title: string;
  content: string;
  tagList: string;
  point: number;
}
