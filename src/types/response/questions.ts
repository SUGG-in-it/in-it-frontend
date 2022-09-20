export interface QuestionsResponseBody {
  questions: Question[];
}

export interface QuestionResponseBody {
  questionId: number;
  title: string;
  content: string;
  nickname: string;
  date: string;
  level: number;
  point: number;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  tagList: string;
  userId: number;
}

export interface MainContentResponseBody {
  questionId: number;
}

export interface QuestionsPageResponseBody {
  count: number;
}

export interface Question {
  questionId: number;
  title: string;
  content: string;
  nickname: string;
  date: string;
  level: number;
  point: number;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
  tagList: string;
  userId: number;
}
