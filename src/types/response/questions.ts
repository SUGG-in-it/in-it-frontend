export interface QuestionsResponseBody {
  questions: Question[];
}

export interface MainContentResponseBody {
  questionId: number;
}

export interface Question {
  questionId: number;
  title: string;
  content: string;
  nickname: string;
  level: number;
  point: number;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  tagList: string[];
}
