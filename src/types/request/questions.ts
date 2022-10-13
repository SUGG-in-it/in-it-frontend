export interface QusetionsRequestBody {
  page: number;
  size: number;
  type: string;
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
