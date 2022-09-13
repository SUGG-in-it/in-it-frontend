import { GET } from '@/api/config/base';

export interface GetQusetionsParams {
  page: number;
  count: number;
  type: string;
}

interface QuestionResponseBody {
  questions: Question[];
}

interface Question {
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

export const getQusetions = async (getQuestionsParams: GetQusetionsParams): Promise<QuestionResponseBody[]> => {
  const { data } = await GET('/questions', getQuestionsParams);
  return data.questions;
};
