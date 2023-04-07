export interface QuestionsResponseBody {
  questions: Question[];
}

export interface SearchQuestionsResponseBody {
  searchQuestionList: Question[];
}

export interface QuestionPageResponseBody {
  count: number;
}

export interface QuestionResponseBody {
  questionId: number;
  title: string;
  content: string;
  nickname: string;
  date: string;
  level: number;
  point: number;
  createDate: string;
  updateDate: string;
  type: string;
  tagList: string;
  userId: number;
  likeCount: number;
  isLike: boolean;
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
  createDate: string;
  updateDate: string;
  type: string;
  tagList: string;
  userId: number;
  answerCount?: number;
  likeCount: number;
  isLike: boolean;
}

export interface QuestionId {
  questionId: number;
}
